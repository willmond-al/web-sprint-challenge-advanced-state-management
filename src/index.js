import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { reducer } from './reducers/index'

import "./index.css";
import App from "./App";

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    rootElement
);


//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.