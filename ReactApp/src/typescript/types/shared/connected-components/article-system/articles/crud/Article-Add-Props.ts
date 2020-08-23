/**
 * @type ArticleAddProps =>  Type anotation for creation of new articles.
 */
type ArticleAddProps = {
  actions: {
    createArticle: (data: {
      articleCategoryId: number;
      title: string;
      content: string;
    }) => void;
  };

  articleCategoriesActions: {
    fetchAllCategories(): void;
  };
};

export default ArticleAddProps;
