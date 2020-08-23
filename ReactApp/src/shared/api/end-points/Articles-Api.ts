import * as requestUtils from "../Request-Utils";

/**
 * @function getAllArticles => Fetch all articles without restrictions.
 */
export const getAllArticles = () => {
  return requestUtils.sendGet("/articles/getAll", false);
};

/**
 * @function getArticle => Fetch article by its identifier.
 * @param id
 */
export const getArticle = (id: number | null | undefined) => {
  return requestUtils.sendGet(`/articles/${id}`, false);
};

/**
 * @function getPagedArticles => Fetch all articles that are suitable for provided pogination.
 * @param pageId
 * @param pageSize
 */
export const getPagedArticles = (pageId: number, pageSize: number) => {
  return requestUtils.sendGet(
    `/articles/getPaged/page?id=${pageId}&pageSize=${pageSize}`,
    false
  );
};

/**
 * @function getPagesCount => Get article pages count based on size of pagination filter.
 * @param pageSize => Size of page (five is recommended).
 */
export const getPagesCount = (pageSize: number) => {
  return requestUtils.sendGet(`/articles/pageCount/${pageSize}`, false);
};

/**
 * @function createArticle - Creation of new articles.
 * @param data => Object that contains all properties for new article.
 */
export const createArticle = (data: {
  articleCategoryId: number;
  title: string;
  content: string;
}) => {
  return requestUtils.sendPost(`/articles/create`, false, data, null);
};

/**
 * @function updateArticle => Update article by its identifier.
 * @param articleId => Article numeric identifier (primary key).
 * @param data => Object that contains all properties which will be updated.
 */
export const updateArticle = (
  articleId: number,
  data: {
    content: string;
    title: string;
  }
) => {
  return requestUtils.sendPut(`/articles/${articleId}`, data, false);
};

/**
 * @function removeArticle => Deletion article be numberic identifier.
 * @param articleId => Article numeric identifier (primary key).
 */
export const removeArticle = (articleId: number) => {
  return requestUtils.sendDel(`/articles/${articleId}`, false);
};
