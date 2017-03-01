import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";

import App from './containers/App';
import './index.css';
import reducers from "./reducers";

const store = createStore(
  reducers, {}, composeWithDevTools(
    applyMiddleware(promiseMiddleware),
  ),
);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
