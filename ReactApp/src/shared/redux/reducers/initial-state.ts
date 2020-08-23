import ArticleModelType from "../../../typescript/types/app/models/article-system/Article-Model-Type";
import ModuleSystemType from "../../../typescript/types/app/models/Module-System-Type";

export default {
  projectDetail: {
    projectName: "",
    themes: [], // All themes to select
    themeCode: "",
    domainUrl: "",
  },

  /* Info about owner. */

  ownerInfo: {
    companyName: "",
    dic: "",
    ico: "",
    contactInfo: {
      street: "",
      city: "",
      zipCode: "",
      email: "",
    },
  },

  features: [], // List of all enabled features

  currentUser: {
    auth: false, // Is user authenticated
    token: "",
    failedLogin: false,
  },

  /* Article system.  */

  articleSystem: {
    currentArticle: null /* Current article to view */,
    articles: {
      content: [] as ArticleModelType[] /* Current articles entries */,
      totalCount: 0 as Number /* Total number of all articles */,
    },
  },

  /* Gallery system. */

  gallerySystem: {
    items: [],
    pageCount: 0,
  },

  /* Url for social icons */

  socialIcons: [],

  moduleSystem: {
    header: {
      modules: [] as ModuleSystemType[],
    },

    body: {
      modules: [] as ModuleSystemType[],
    },

    footer: {
      modules: [] as ModuleSystemType[],
    },

    totalCount: 0 as Number /* Total number of all modules (needed for pagination generation.) */,
  },

  featureSystem: {
    features: [], // List of all features
  },

  /* Summary stats (article count, module count etc.) */
  summaryStats: {
    articles: {
      totalCount: {} as Number,
    },

    features: {
      totalCount: 0,
      enabledCount: 0,
    },

    gallerySystem: {
      photos: {
        totalCount: 0,
      },
    },

    modules: {
      totalCount: 0,
      enabledCount: 0,
    },
  },
};
