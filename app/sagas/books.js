import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from '../actions';
import { 
  fork, 
  call, 
  take, 
  put, 
  select 
} from 'redux-saga/effects';

import { getBooks } from '../selectors';
import { FIREBASE_URL } from '../constants';

const NO_BOOKS_FOUND = 'No books found.';

const fetchBooks = () => {
  return fetch(`${FIREBASE_URL}/books.json`)
    .then(response => response.json())
    .then(data => data);
};

function* watchFetchBooks() {
  while (yield take(FETCH_BOOKS_REQUEST)) {
    try {
      const localBooks = yield select(getBooks);
      let books = localBooks.length === 0 ? yield call(fetchBooks) : localBooks;

      yield put({ type: FETCH_BOOKS_SUCCESS, books });
    } catch(e) {
      console.log(e);
    }
  }
}

export default function* () {
  yield fork(watchFetchBooks);
}