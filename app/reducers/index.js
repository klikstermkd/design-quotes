import { combineReducers } from 'redux';
import app from './app';
import quotes from './quotes';
import books from './books';
import posters from './posters';

export default combineReducers({ app, quotes, books, posters });