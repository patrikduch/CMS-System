import * as actionTypes from "../action-types";
import { Dispatch } from "redux";

import * as articleAPI from "../../../api/end-points/Articles-Api";

/**
 * @function fetchAllArticles - get all articles without pagination.
 */
export const fetchAllArticles = () => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.FETCH_ALL_ARTICLE_CATEGORIES,
    payload: await articleAPI.getAllArticles(),
  });
};

/**
 * @function fetchArticle - get article by numeric identifier.
 * @param id - numeric article identifier.
 */
export const fetchArticle = (id: number | null | undefined) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: actionTypes.FETCH_ARTICLE_BY_ID,
    payload: await articleAPI.getArticle(id),
  });
};

/**
 * @function fetchRecentArticles => Get recent top five articles.
 */
export const fetchRecentArticles = () => async (dispatch: Dispatch) => {
  const recentArticles = await articleAPI.getPagedArticles(1, 5);

  const transformedArticles = recentArticles.data.articles.map(
    (article: any) => {
      return {
        id: article.id,
        title: article.title,
      };
    }
  );
  dispatch({
    type: actionTypes.FETCH_RECENT_ARTICLES,
    payload: {
      data: {
        articles: {
          content: transformedArticles,
        },
      },
    },
  });
};

/**
 * @function resetActualArticle - reset actual selected article detail.
 */
export const resetActualArticle = () => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.RESET_ACTUAL_ARTICLE,
  });
};

/**
 * @function fetchPagedArticles => Fetch articles items with pagination filter.
 * @param pageId  => Selected page number.
 * @param pageSize => Size of each page of pagination.
 */
export const fetchPagedArticles = (pageId: number, pageSize: number) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: actionTypes.FETCH_PAGGED_ARTICLES,
    payload: await articleAPI.getPagedArticles(pageId, pageSize),
  });
};

/**
 * @function fetchPageCount => Fetch items count based on pagination page size.
 * @param pageSize  => Size of each page of pagination.
 */
export const fetchPageCount = (pageSize: number) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: actionTypes.FETCH_ARTICLES_PAGE_COUNT,
    payload: await articleAPI.getPagesCount(pageSize),
  });
};

/**
 * @function createArticle => Creation of new article. When new article is created is needed to update list of all articles.
 * @param data => Data that represents new article entity.
 */
export const createArticle = (data: {
  articleCategoryId: number;
  title: string;
  content: string;
}) => async (dispatch: Dispatch) => {
  /* Creation of new article. */
  dispatch({
    type: actionTypes.CREATE_ARTICLE,
    payload: await articleAPI.createArticle(data),
  });

  /* Get all articles with pagination. */
  dispatch({
    type: actionTypes.FETCH_PAGGED_ARTICLES,
    payload: await articleAPI.getPagedArticles(1, 5),
  });
};

/**
 * @function updateArticle - update specified article.
 * @param articleId - numeric article identifier,
 * @param => Data that represents updated article entity.
 */
export const updateArticle = (
  articleId: number,
  data: { title: string; content: string }
) => async (dispatch: Dispatch) => {
  await articleAPI.updateArticle(articleId, data),
    dispatch({
      type: actionTypes.UPDATE_ARTICLE,
    });

  /* Get all articles with pagination. */
  dispatch({
    type: actionTypes.FETCH_PAGGED_ARTICLES,
    payload: await articleAPI.getPagedArticles(1, 5),
  });
};

/**
 * @function removeArticle - remove article from Redux store.
 * @param articleId => Identifier of article to remove.
 */
export const removeArticle = (articleId: number, pageId: number) => async (
  dispatch: Dispatch
) => {
  await articleAPI.removeArticle(articleId);

  dispatch({
    type: actionTypes.REMOVE_ARTICLE,
    payload: {
      data: {
        articleId,
      },
    },
  });
};
