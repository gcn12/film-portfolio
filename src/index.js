import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./redux/rootReducer"
// import logger from "redux-logger"

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

// const middlewares = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
