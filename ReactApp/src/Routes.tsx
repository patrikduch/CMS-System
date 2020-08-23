import {
  Landing,
  Admin,
  ArticlePage,
  ArticleContentPage,
  GalleryPage,
} from "./Bundles";
import ArticleAdminPage from "./shared/pages/admin/article-system/articles/Article-Admin-Page";
import ArticleContentAdminPage from "./shared/pages/admin/article-system/articles/Article-Content-Admin-Page";
import ArticlesNewEntryPage from "./shared/pages/admin/article-system/articles/Articles-New-Entry-Page";
import ArticlesAdminPage from "./shared/pages/admin/article-system/articles/Articles-Admin-Page";

import ContactAdminPage from "./shared/pages/admin/Contact-Admin-Page";
import DashboardAdminPage from "./shared/pages/admin/Dashboard-Admin-Page";
import ModulesAdminPage from "./shared/pages/admin/Modules-Admin-Page";
import SettingsAdminPage from "./shared/pages/admin/Settings-Admin-Page";
import ThemesAdminPage from "./shared/pages/admin/Themes-Admin-Page";
import GalleryAdminPage from "./shared/pages/admin/Gallery-Admin-Page";
import SocialIconsAdminPage from "./shared/pages/admin/Social-Icons-Admin-Page";
import ClientSharedPage from "./shared/pages/root/Client-Shared-Page";
import GalleryImagesListPage from "./shared/pages/admin/gallery-system/Gallery-Images-List-Page";
import GalleryImageNewEntryPage from "./shared/pages/admin/gallery-system/Gallery-Image-New-Entry-Page";
import NotFoundPage from "./shared/pages/errors/public-side/Not-Found-Page";
import NotFoundAdminPage from "./shared/pages/errors/admin/Not-Found-Admin-Page";

export default [
  {
    ...ClientSharedPage,
    routes: [
      {
        ...ArticlePage,
        path: "/articles",
        exact: true,
      },

      {
        ...Landing,
        path: "/",
        exact: true,
      },

      {
        ...ArticleContentPage,
        path: "/articles/:id",
        exact: true,
      },
      {
        ...GalleryPage,
        path: "/gallery/photos",
        exact: true,
      },

      {
        ...Admin,
        path: "/admin",
        routes: [
          {
            path: "/admin",
            component: DashboardAdminPage,
            exact: true,
          },

          {
            path: "/admin/marketing/social-networks",
            component: SocialIconsAdminPage,
            exact: true,
          },

          // Articles admin page
          {
            path: "/admin/articlepage",
            ...ArticleAdminPage,
            routes: [
              {
                path: "/admin/articlepage/articles",
                component: ArticlesAdminPage,
                exact: true,
              },
            ],
          },

          //  Creation of new article
          {
            path: "/admin/articles/new",
            ...ArticlesNewEntryPage,
            exact: true,
          },

          {
            path: "/admin/articles/:id",
            ...ArticleContentAdminPage,
            exact: true,
          },

          {
            path: "/admin/gallery",
            ...GalleryAdminPage,
            routes: [
              {
                path: "/admin/gallery",
                component: GalleryImagesListPage,
                exact: true,
              },

              {
                path: "/admin/gallery/add",
                component: GalleryImageNewEntryPage,
                exact: true,
              },
            ],
          },

          {
            path: "/admin/modules",
            ...ModulesAdminPage,
            exact: true,
          },

          {
            path: "/admin/settings",
            component: SettingsAdminPage,
            exact: true,
          },

          {
            ...ThemesAdminPage,
            path: "/admin/themes",
            exact: true,
          },

          {
            path: "/admin/contact",
            component: ContactAdminPage,
            exact: true,
          },
          {
            component: NotFoundAdminPage,
          },
        ],
      },

      {
        ...NotFoundPage,
      },
    ],
  },
];
