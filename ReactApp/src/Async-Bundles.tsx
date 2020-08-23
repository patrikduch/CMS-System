import asyncComponent from "./lib/code-splitting/loading/Async-Component";

export const Landing = asyncComponent("Landing", () =>
  import("./shared/pages/root/Landing-Page")
);
export const Admin = asyncComponent("Admin", () =>
  import("./shared/pages/root/Admin-Page")
);

export const ArticlePage = asyncComponent("ArticlePage", () =>
  import("./shared/pages/root/Articles-Page")
);

export const ArticleContentPage = asyncComponent("ArticleContentPage", () =>
  import("./shared/pages/root/Article-Content-Page")
);

export const GalleryPage = asyncComponent("GalleryPage", () =>
  import("./shared/pages/root/Gallery-Page")
);
