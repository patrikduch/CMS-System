import * as requestUtils from "../Request-Utils";

/**
  * @function adminSignUp => Admin signup REST API communication that includes autorization and authentication.
  * @param  username  username for admin signup processs.
  * @param  password  password for legit Admin user.
 */
export const adminSignUp = (username: string, password: string) => {
  return requestUtils.sendPost(
    "/user/admin/signup",
    false,
    {
      username: username,
      password: password,
    },
    null
  );
};

/**
 * @function isAdminAuthenticated => Check if user is legit Administrator.
 * @param tokenString => token that will be verified.
 */
export const isAdminAuthenticated = (tokenString: String) => {
  return requestUtils.sendPost(
    "/user/admin/isAuthenticated",
    false,
    {
      token: tokenString,
    },
    null
  );
};
