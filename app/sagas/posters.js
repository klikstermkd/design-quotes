import { FETCH_POSTERS_REQUEST, FETCH_POSTERS_SUCCESS } from '../actions';
import { 
  fork, 
  call, 
  take, 
  put, 
  select 
} from 'redux-saga/effects';

import { getPosters } from '../selectors';
import { FIREBASE_URL } from '../constants';

const NO_POSTERS_FOUND = 'No posters found.';

const fetchPosters = () => {
  return fetch(`${FIREBASE_URL}/posters.json`)
    .then(response => response.json())
    .then(data => data);
};

function* watchFetchPosters() {
  while (yield take(FETCH_POSTERS_REQUEST)) {
    try {
      const localPosters = yield select(getPosters);
      let posters = localPosters.length === 0 ? yield call(fetchPosters) : localPosters;

      yield put({ type: FETCH_POSTERS_SUCCESS, posters });
    } catch(e) {
      console.log(e);
    }
  }
}

export default function* () {
  yield fork(watchFetchPosters);
}