import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import ToDoList from './components/ToDoList';
import IndivTask from './components/IndivTask';

import todoItems from './data/todoItems';
import quotes from './data/quotes';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/'

const defaultState = {
    todoItems,
    quotes
}

const store = createStore(rootReducer, defaultState);

const router = (
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={ToDoList} />
            <Route path="/task/:id" component={IndivTask} />
        </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
