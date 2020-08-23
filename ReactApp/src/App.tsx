import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";
import routes from "./routes";

class App extends Component {

  componentDidMount() {
    console.log("Patrik Duch");
  }

  render() {
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
          <h1 className="App-title">Patrik Duch</h1>
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
}

export default App;