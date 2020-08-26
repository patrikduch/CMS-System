import bcrypt from "bcrypt-nodejs";

import { injectable, inject } from "inversify";
import IEncryptionService from "../typescript/interfaces/services/IEncryption-Service";

/* 
  Encryption service that is needed for password encryption etc.
*/
@injectable()
export default class EncryptionService implements IEncryptionService {
  /*  
    Compare encrypted password with specified password.
  */
  comparePasswords(encrypedPassword: string, plainPassword: string) {
    const result = bcrypt.compareSync(plainPassword, encrypedPassword);

    return result;
  }
}
