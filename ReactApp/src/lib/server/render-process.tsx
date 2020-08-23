import { Request, Response } from "express";
import { Store } from "redux";
import StyleTagsType from "../../typescript/types/app/lib/server/styled-components/Style-Tags-Type";
import { RouteConfig, renderRoutes } from "react-router-config";
import Helmet, { HelmetData } from "react-helmet";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import ReactDOMServer from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import { Provider } from "react-redux";
import StyledInjectorContainer from "../../shared/redux/containers/styled-components/Styled-Injector-Container";
import { StaticRouter } from "react-router-dom";

/* HTML utility helper. */
import { generateHtml } from "../../server/global-helpers/html/utils/create-document";

/* Minification utility helpers. */
import { minifyStyles } from "../../server/global-helpers/styled-components/minify-styles";
import { removeCommentsAndSpacing } from "../../server/global-helpers/html/utils/html-minifier";
import RenderContextType from "../../typescript/types/app/lib/server/Render-Context-Type";

/**
 * @function markupFetcher => Render React app into string.
 * @param req => Current HTTP request.
 * @param chunkContext  => Bundle context that is used to split app into separate bundle modules.
 * @param helmetContext  => Context that is used for SEO optimalization.
 * @param store => Instance of  Redux store.
 * @param sheet  ´=> Sheet that is  used to applied custom styles.
 * @param Routes  => Set of component that will be rendered into single string sequence.
 */
const markupFetcher = (
  req: Request,
  chunkContext: {},
  helmetContext: {},
  store: Store,
  sheet: { instance: ServerStyleSheet },
  Routes: RouteConfig[]
) => {
  return ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StyleSheetManager sheet={sheet.instance}>
        <Provider store={store}>
          <StyledInjectorContainer>
            <StaticRouter location={req.url} context={chunkContext}>
              {renderRoutes(Routes)}
            </StaticRouter>
          </StyledInjectorContainer>
        </Provider>
      </StyleSheetManager>
    </HelmetProvider>
  );
};

/**
 * @function renderProcess => Universal (isomorphic) app rendering process.
 * @param req  => Request object of current HTTP call.
 * @param store  => Instance of Redux store object.
 * @param Routes  => Set of component for processing.
 * @param queryParams  => additional query parameters for current request.
 */
const renderProcess = (
  req: Request,
  res: Response,
  store: Store,
  Routes: RouteConfig[],
  queryParams: string[],
  staticRouterContext: RenderContextType
) => {
  /* 1. creating out stylesheet */
  const sheet = new ServerStyleSheet();

  // 2. React components transformed into string
  const content = markupFetcher(
    req,
    staticRouterContext,
    {} as { helmet: HelmetData },
    store,
    sheet,
    Routes
  );

  if (staticRouterContext.notFound) {
    res.status(404);
  }

  // 3. Apply  custom styles.
  const styleTags = sheet.getStyleElement();
  const minifiedStyles: StyleTagsType[] = minifyStyles(styleTags);

  // 4. SEO optimalization props.
  const helmetData = Helmet.renderStatic();

  // 5. Return final html in the form string sequence.
  return removeCommentsAndSpacing(
    generateHtml(
      helmetData,
      minifiedStyles,
      content,
      staticRouterContext,
      store
    )
  );
};

export default renderProcess;
