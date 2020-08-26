import { injectable, inject } from "inversify";
import { TYPES } from "../../ioc/types";
import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";
import IGallerySystemFasade from "../../typescript/interfaces/fasades/IGallery-System-Fasade";
import GalleryItemModel from "../../models/gallery-system/Gallery-Item";
import { ReadStream, stat } from "fs";

import IStatsFasade from "../../typescript/interfaces/fasades/IStats-Fasade";

import imageThumbnail from "image-thumbnail";
import FileSaverService from "../../services/files/File-Helper-Service";

@injectable()
export default class GallerySystemFasade implements IGallerySystemFasade {
  private _uow!: IUnitOfWork;
  private _statsFasade!: IStatsFasade;

  constructor(
    @inject(TYPES.IUnitOfWork)
    uow: IUnitOfWork,
    @inject(TYPES.IStatsFasade)
    statsFasade: IStatsFasade
  ) {
    // Addition fasades initialization
    this._statsFasade = statsFasade;

    // Save unit of work instance
    this._uow = uow;
  }

  /**
   * @function getPagedPhotos => Fetch photos with pagination restriction.
   * @param pageId => Numeric identifier  of selected page.
   * @param pageSize => Size of each page.
   */
  async getPagedPhotos(pageId: number, pageSize: number): Promise<any> {
    const res = await this._uow
      .getRepository(GalleryItemModel)
      .getPaged(pageId, pageSize, {
        order: [["id", "DESC"]],
      });

    const totalCount = (
      await this._statsFasade.getDashboardStats()
    ).getTotalGalleryPhotosCount();

    return {
      photos: res,
      totalCount,
    };
  }

  async uploadImage(
    files: import("fs").ReadStream[] | undefined,
    imageHeight: number
  ): Promise<any> {
    let file: ReadStream | null = null;
    let outputFileName = "";

    // Check for nullity of file collection
    if (files != null) {
      file = files[0];

      outputFileName = FileSaverService.saveFile(
        file.path,
        "./dist/uploads/images/originals"
      );

      FileSaverService.generateThumbnail(
        "./dist/uploads/images/originals",
        "./dist/uploads/images/thumbs",
        outputFileName,
        imageHeight
      );
    }

    return {
      fileName: outputFileName,
      content: file,
    };
  }

  /**
   * @function fetchAll => Fetch all gallery items without restrictions.
   */
  async fetchAll(): Promise<any> {
    return this._uow.getRepository(GalleryItemModel).findAll();
  }

  /**
   * @function saveFile => Save file
   * @param data
   */
  async saveFile(data: any): Promise<any> {
    const newInstance = {
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
    };

    const rep = this._uow.getRepository(GalleryItemModel);

    const currentModel = await rep.getCurrentModel();

    /* Create local instance */
    const res = currentModel.build(newInstance);

    /* Add repository into tracking state. */
    this._uow.trackRepository(res);

    /* Save changes to the database */
    this._uow.saveChanges();
  }

  /**
   * @function removePhoto => Remove photography from "Gallery-system" be specified numeric identifier.
   * @param url
   */
  async removePhoto(id: number): Promise<any> {
    const entity = await this._uow.getRepository(GalleryItemModel).findById(id);

    /* Entity cannot be found */
    if (entity == null) {
      return null;
    }

    await GalleryItemModel.destroy({
      where: {
        id: entity.id,
      },
    });

    return {
      photoUrl: entity.url,
    };
  }
}
