import fs from "fs";
import path from "path";

const gm = require("gm").subClass({ imageMagick: true });

class FileSaverService {
  /**
   * @function getExtension => Get extension from provided file.
   * @param filePath =>  Url of filename.
   */
  private static getExtension(filePath: string) {
    return filePath.substr(filePath.lastIndexOf(".") + 1);
  }

  /**
   * @function saveFile => Save file to REST API server.
   * @param filePath => File path that is gained from source form.
   * @param relativePath  => Destination for result output stream.
   * @returns => Ouput name of saved file.
   */
  static saveFile(filePath: string | Buffer, relativePath: string) {
    // 1. Loaded stream form upload form
    const reader = fs.createReadStream(filePath);

    // 2. Get the extension of provided file
    const fileExtension = FileSaverService.getExtension(filePath.toString());

    // 3. Generated output file name (based on time of request)
    const outputFileName = `${new Date()
      .valueOf()
      .toString()}.${fileExtension}`;

    // 4. Creation of full path of newly created file stored on REST API server]
    const fullPath = path.join(path.resolve(relativePath), outputFileName);
    const stream = fs.createWriteStream(fullPath);
    reader.pipe(stream);

    return outputFileName;
  }

  /**
   *
   * @param originalImgPath
   * @param relativePath
   * @param outputFileName  => Name of created thumbnail img file. (Original and his thumbnail has the same file name that is generated on the fly.)
   */
  static generateThumbnail(
    originalImgPath: string,
    thumbnailImgPath: string,
    outputFileName: string,
    imageHeight: number
  ) {
    const originalImgUrl = path.join(
      path.resolve(originalImgPath),
      outputFileName
    );

    const thumbnailImgUrl = path.join(
      path.resolve(thumbnailImgPath),
      outputFileName
    );

    gm(originalImgUrl)
      .resize(imageHeight, 200)
      .write(thumbnailImgUrl, function (error: any) {
        if (error) {
          console.error(error);
        }
      });
  }
}

export default FileSaverService;
