import { createContext } from "react";

/* Initialize article detail wysiwyg context. */
const ArticleDetailWysiwygContext = createContext({
  title: "",
  hasTitleError: false,
  content: "",
  hasContentError: false,
});

export default ArticleDetailWysiwygContext;
