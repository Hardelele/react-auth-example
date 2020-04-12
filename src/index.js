import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Application from "./Application";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = () => {
  return (
      <Provider store={store}>
          <Application/>
      </Provider>
  );
};

ReactDOM.render(
    app(), document.getElementById('root')
);

serviceWorker.unregister();
