import express, { Response, Request } from "express";
import renderProcess from "./lib/server/render-process";
import getServerStore from "./lib/server/redux/store/get-server-store";
import { matchRoutes, RouteConfig } from "react-router-config";
import Routes from "./Routes";

import RenderContextType from "./typescript/types/app/lib/server/Render-Context-Type";

/* Process all necessary external styles. */
import "bootstrap/dist/css/bootstrap.min.css";

/* Server instance */
const app = express();

/* Serve up static files from this directory */
app.use(express.static("dist"));

/*
  All routes are matched to this rule
*/
app.get("*", async function (req: Request, res: Response) {


  // Create separate instance of redux store for server side
  const store = getServerStore(req);

  // Promises all that represents sets of component with loadData method asociated with them
  const promises = matchRoutes(Routes as RouteConfig[], req.path).map(
    ({ route }) => {
      // Process query params
      if (route.component != undefined) {
        route.query = req.query;
      }

      return route.loadData
        ? route.loadData(store, {
            queryString: req.query,
            params: req.params,
            path: req.path,
          })
        : null;
    }
  );

  /* Resolving all promises */
  await Promise.all(promises).then(() => {
    /* now context.splitPoints contains the names of the chunks we used during rendering */
    const context: RenderContextType = {
      splitPoints: [],
      notFound: false,
    };

    // After that we can render content
    res.send(
      renderProcess(req, res, store, Routes as RouteConfig[], req.query, context)
    );
  });
});

/*
  App listening 
  (PORT 8080 is port needed to be deployed on production)
*/
app.listen(8080);
