import { ReadStream } from "fs";

export default interface IGallerySystemFasade {
  fetchAll(): Promise<any>;
  getPagedPhotos(pageId: number, pageSize: number): Promise<any>;
  uploadImage(
    files: ReadStream[] | undefined,
    imageheight: number
  ): Promise<any>;
  saveFile(data: any): Promise<any>;
  removePhoto(id: number): Promise<any>;
}
