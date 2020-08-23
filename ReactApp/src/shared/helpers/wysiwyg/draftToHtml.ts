import { EditorState, convertToRaw } from "draft-js";

/**
 * @function draftToHtml - converts EditorState object to html output.
 * @param editorState  - EditorState object that will be processed.
 */
const draftToHtml = async (editorState: EditorState): Promise<String> => {
  return await import("draftjs-to-html").then(_ => {
    const draftToHtml = _.default;

    /* Get article data in html format */
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    return html;
  });
};

export default draftToHtml;
