import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
);

sagas.forEach((saga) => sagaMiddleware.run(saga));