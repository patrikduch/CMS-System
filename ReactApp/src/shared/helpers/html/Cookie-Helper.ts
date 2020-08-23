import jsCookie from "js-cookie";
// Dictionary data structure
import KeyedCollection from "../data-structures/Keyed-Collection";

/* Return value of cookie by its key */
export const getCookie = (key: string) => {
  return jsCookie.get(key);
};

export const isCookieCreated = (key: string) => {
  const cookie = jsCookie.get(key);

  return cookie != null;
};

/* Store cookie value by its key identifier  */
export const setCookie = (key: string, value: string) => {
  jsCookie.set(key, value, { expires: 7 });
};

/* Remove stored cookie */
export const removeCookie = (key: string) => {
  jsCookie.remove(key);
};

/* Transfer cookie string into dictionary */
export const toDictionary = (cookieToken: String) => {
  // Set of all cookies (String cookie representation conversion to dictionary)
  const cookieSet = new KeyedCollection<String>();

  // String separation by ';' to String array
  const tokenArray = cookieToken.split(";");

  for (let i = 0; i < tokenArray.length; i++) {
    const temp = tokenArray[i].split("=");
    //cookieSet.Add(temp[0].trimLeft(), temp[1]);
    const currentKey = temp[0].trim();
    cookieSet.Add(currentKey, temp[1]);
  }

  return cookieSet; // Returns dictonary that represents content stored in cookies
};
