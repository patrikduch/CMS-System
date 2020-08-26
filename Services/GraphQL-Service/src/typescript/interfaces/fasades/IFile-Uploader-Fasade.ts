import { Context } from "koa";
import { ReadStream } from "fs";

export default interface IFileUploaderFasade {
  getFiles(ctx: Context): Promise<ReadStream[] | undefined>;
  uploadSingleFile(files: ReadStream[] | undefined): Promise<any>;
}
