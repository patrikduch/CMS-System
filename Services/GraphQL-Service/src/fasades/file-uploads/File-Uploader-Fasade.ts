import { injectable } from "inversify";
import IFileUploaderFasade from "../../typescript/interfaces/fasades/IFile-Uploader-Fasade";
import asyncBusboy from "async-busboy";

import { Context } from "koa";
import { ReadStream } from "fs";

import path from "path";
import fs from "fs";

@injectable()
export default class FileUploaderFasade implements IFileUploaderFasade {
  async getFiles(ctx: Context): Promise<ReadStream[] | undefined> {
    const { files } = await asyncBusboy(ctx.req);
    return files;
  }

  async uploadSingleFile(files: ReadStream[]): Promise<any> {
    let file: ReadStream | null = null;

    let outputFileName = "";

    // Check for nullity of file collection
    if (files != null) {
      file = files[0];

      const reader = fs.createReadStream(file.path);

      const fileExtension = file.path
        .toString()
        .substr(file.path.lastIndexOf(".") + 1);

      outputFileName = `${Math.random().toString()}.${fileExtension}`;

      const stream = fs.createWriteStream(
        path.join(path.resolve("./dist/uploads/images"), outputFileName)
      );
      reader.pipe(stream);
    }

    return {
      fileName: outputFileName,
      content: file,
    };
  }
}
