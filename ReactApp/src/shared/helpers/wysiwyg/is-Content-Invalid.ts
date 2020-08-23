/**
 * @function isContentValid => check if content of WYSIWYG editor is in invalid state.
 * Editor default value has tag <p></p> so its needed to remove this additional tag information.
 */
const isContentInvalid = (content: String) => {
  let processContent = content;

  processContent = processContent.replace("<p>", "");
  processContent = processContent.replace("</p>", "");
  processContent = processContent.trim();

  return processContent.length === 0;
};

export default isContentInvalid;
