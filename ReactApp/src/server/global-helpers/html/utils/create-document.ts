import { HelmetData } from "react-helmet";
import HelmetIntegration from "../../../../lib/server/seo/Helmet-Integration";
import StyleTagsType from "../../../../typescript/types/app/lib/server/styled-components/Style-Tags-Type";
import fontawesome from "@fortawesome/fontawesome";
import RenderContextType from "../../../../typescript/types/app/lib/server/Render-Context-Type";

import serialize from "serialize-javascript";
import { Store } from "redux";

/**
 * @function generateHtml => Process of HTML generation.
 * @param helmetData  => Seo processing via Helmet library.
 * @param minifiedStyles 
 * @param content => Data that will be rendered.
 * @param context => Context that comes from Express server level.
 * @param store  => Access to Redux store.
 */
export const generateHtml = (
  helmetData: HelmetData,
  minifiedStyles: StyleTagsType[],
  content: string,
  context: RenderContextType,
  store: Store
) => {
  const html = `<!DOCTYPE html>
  <html lang="cs">
  <head>  
  ${HelmetIntegration.getMeta(helmetData)}
  ${HelmetIntegration.getTitle(helmetData)}
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Patrik Duch, e-mail: duchpatrik@icloud.com" />
  <meta name="robots" content="index, follow" />   
  <meta name="revisit-after" content="2 days" />
  <meta name="description" content="Bakalářská práce psaná za pomocí React a Redux JS knihoven." />
  <meta name="keywords" content="ReactJS, Patrik Duch, Bakalářská práce, Redux, NodeJS, Isomorphic app, Rosti.cz" />
  <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap&subset=cyrillic-ext" />
  <link rel="stylesheet" type="text/css" href="/App.css" />
  <style>
  ${minifiedStyles.map(
    (arg: StyleTagsType) => arg.props.dangerouslySetInnerHTML.__html
  )}
  </style>
  <style>${fontawesome.dom.css()}</style>
  </head>
  <body>
   <div id="app">${content}</div>
   <script>
     window.splitPoints=${JSON.stringify(
       context.splitPoints
     )}; // Autor: Patrik Duch, Copyright: Patrik Duch, Ostravská univerzita
   </script>
   <script> 
     window.INITIAL_STATE = ${serialize(store.getState())}
   </script>
   <script src="/vendors~client.bundle.js"></script>
   <script src="/client.js"></script>
 </body>
  `;

  return html;
};
