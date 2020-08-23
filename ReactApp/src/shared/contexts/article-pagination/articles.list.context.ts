import { createContext } from "react";

/* Initialize articles list pagination context. */
const ArticlesListContext = createContext({
  pageId: 0,
  totalCount: 0,
  hasError: false,
  setPageId: (pageId: number) => {
    console.log("Template method for articles list context.");
  },
  setTotalCount: (totalCount: number) => {
    console.log("Template method for setting total page count.");
  },

  setHasError: () => {
    console.log("Template method for toggling error flag.");
  },
});

export default ArticlesListContext;
