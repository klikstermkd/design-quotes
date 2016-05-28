import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  ADD_QUOTE_REQUEST,
  ADD_QUOTE_SUCCESS,
  ADD_QUOTE_FAILURE
} from '../actions';
import { 
  fork, 
  call, 
  take, 
  put, 
  select 
} from 'redux-saga/effects';

import { getQuotes } from '../selectors';
import { FIREBASE_URL } from '../constants';

const NO_QUOTES_FOUND = 'No quotes found.';

const fetchQuotes = () => {
  return fetch(`${FIREBASE_URL}/quotes.json`)
    .then(response => response.json())
    .then(data => data);
};

const addQuote = quote => {
  const { 
    text, 
    author, 
    source 
  } = quote;

  return new Promise((resolve, reject) => {
    quotesDataSource.push({ text, author, source }, error => {
      if (error) reject(error);

      resolve({quote});
    });
  });
};

function* watchFetchQuotes() {
  while (yield take(FETCH_QUOTES_REQUEST)) {
    try {
      const localQuotes = yield select(getQuotes);
      let quotes = localQuotes.length === 0 ? yield call(fetchQuotes) : localQuotes;

      yield put({ type: FETCH_QUOTES_SUCCESS, quotes });
    } catch(e) {
      console.log(e);
    }
  }
}

function* watchAddTodo() {
  while (true) { 
    const { quote } = yield take(ADD_QUOTE_REQUEST);
    
    try {
      yield call(addQuote, quote);
      yield put({ type: ADD_QUOTE_SUCCESS });
    } catch(e) {
      yield put({ type: ADD_QUOTE_FAILURE });
    }
  }
}

export default function* () {
  yield fork(watchFetchQuotes);
  yield fork(watchAddTodo);
}