/**
 * @interface IEncryptionService => Contract for encryption service "EncryptService".
 */
interface IEncryptionService {
  comparePasswords(encrypedPassword: string, plainPass: string): boolean;
}

export default IEncryptionService;
