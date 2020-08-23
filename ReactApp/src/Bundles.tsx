import syncComponent from "./lib/code-splitting/loading/Sync-Component";

export const Landing = syncComponent(
  "Landing",
  require("./shared/pages/root/Landing-Page")
);
export const Admin = syncComponent(
  "Admin",
  require("./shared/pages/root/Admin-Page")
);

export const ArticlePage = syncComponent(
  "ArticlePage",
  require("./shared/pages/root/Articles-Page")
);

export const ArticleContentPage = syncComponent(
  "ArticleContentPage",
  require("./shared/pages/root/Article-Content-Page")
);

export const GalleryPage = syncComponent(
  "GalleryPage",
  require("./shared/pages/root/Gallery-Page")
);
