import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";
import routes from "./routes";
import useProjectDetail from "./shared/data/qql/project-details/useProjectDetail";

/**
 * @function App => Entry component of whole application.
 */
const App: React.FC = () => {

  const projectDetail = useProjectDetail();

  return (
    <div className="App">
      <Helmet>
        <title>Patrik Duch</title>
        <meta
          name="description"
          content="Description of the website"
        />
      </Helmet>
      <header className="App-header">
        <h1 className="App-title">{projectDetail.projectName}</h1>
      </header>

      <br/>
      <Switch>
        {routes.map((route: any) => (
          <Route key={route.name} {...route} />
        ))}
      </Switch>
    </div>
  );

}

export default App;