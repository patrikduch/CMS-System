import bcrypt from "bcrypt-nodejs";

/**
 * @class UserDataHelper => Helper class for managing users.
 */
class UserDataHelper {
  /**
   * @function comparePasswords => Comparision of passwords. Stored hash and provided string input.
   * @param password => Password input.
   * @param hashString => Stored password in form of hash that comes from database.
   */
  static async comparePasswords(password: string, hashString: string) {
    return bcrypt.compareSync(password, hashString);
  }
}

export default UserDataHelper;
