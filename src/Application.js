import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './css/application.css';
import {Authorization} from "./components/Authorization";
import {Profile} from "./components/Profile";

function Application() {
  return (
      <BrowserRouter>
        <div className="application-container">
          <Switch>
            <Route path="/" exact component={Authorization}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default Application;
