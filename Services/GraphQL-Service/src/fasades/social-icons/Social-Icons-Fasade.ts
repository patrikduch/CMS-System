import { injectable, inject } from "inversify";
import { TYPES } from "../../ioc/types";
import ISocialIconsFasade from "../../typescript/interfaces/fasades/ISocial-Icons-Fasade";
import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";
import ISocialIconDto from "../../typescript/interfaces/dto/social-icons/ISocial-Icon-Dto";

// Required models
import SocialIconModel from "../../models/social-icons/Social-Icon";

@injectable()
export default class SocialIconsFasade implements ISocialIconsFasade {
  private _uow!: IUnitOfWork;

  constructor(
    @inject(TYPES.IUnitOfWork)
    uow: IUnitOfWork
  ) {
    // Save unit of work instance
    this._uow = uow;
  }

  async getAll(): Promise<any> {
    const socialIcons = await this._uow
      .getRepository(SocialIconModel)
      .findAll();

    const socialIconsList: any[] = [];

    socialIcons.forEach(
      (response: { code: string; name: string; url: string }) => {
        socialIconsList.push({
          code: response.code,
          name: response.name,
          url: response.url,
        });
      }
    );

    return socialIconsList;
  }

  /*
   *  Update details about specified social icon.
   */
  async updateSocialIcon(
    id: number,
    data: ISocialIconDto
  ): Promise<ISocialIconDto> {
    const entity = await this._uow.getRepository(SocialIconModel).findFirst({
      where: {
        code: data.getCode(),
      },
    });

    // 1. Change data of fetched entity

    entity.url = data.getUrl();
    entity.code = data.getCode();
    entity.name = data.getName();

    /* 2. Add repository into tracking state. */
    this._uow.trackRepository(entity);

    // 3. Save changes to the database
    this._uow.saveChanges();

    // 4. Returns data as DTO
    return data;
  }
}
