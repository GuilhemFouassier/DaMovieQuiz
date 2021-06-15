import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import points from './points';
import movies from './movies';

const reducer = combineReducers({
    points,
    movies
})

const store = configureStore({ reducer, devTools: true, middleware: [thunk] });

export default store;
