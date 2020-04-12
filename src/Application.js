import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './css/application.css';
import {Authorization} from "./components/Authorization";

function Application() {
  return (
      <BrowserRouter>
        <div className="application-container">
          <Switch>
            <Route path="/" exact component={Authorization}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default Application;
