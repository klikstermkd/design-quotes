import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from '../actions';

const initialState = {
  isLoading: { showBooks: false },
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return { 
        ...state, 
        isLoading: { ...state.isLoading, showBooks: true }
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state, 
        isLoading: { ...state.isLoading, showBooks: false }, 
        items: Object.keys(action.books).map(key => action.books[key]).reverse()
      };
    default:
      return state;
  }
};