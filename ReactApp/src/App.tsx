import './App.scss';

import React from "react";
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
    <div className="app-container">
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