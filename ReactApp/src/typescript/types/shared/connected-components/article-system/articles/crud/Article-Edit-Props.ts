/**
 * @type ArticleEditProps =>  Type anotation for editting currently created articles.
 */
type ArticleEditProps = {
  articleId: number | null;

  children?: React.ReactNode;

  updateArticle(
    articleId: number,
    data: { title: string; content: string }
  ): void;
};

export default ArticleEditProps;
