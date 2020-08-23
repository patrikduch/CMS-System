/**
 * @function fetchStylesheet => Fetch external CSS stylesheet.
 * @param stylesheetUrl  => Url of external CSS stylesheet.
 */
const fetchExternalStylesheet = async (stylesheetUrl: string) => {

    return fetch(
        stylesheetUrl
      ).then((response) => response.text());
}

export default fetchExternalStylesheet;