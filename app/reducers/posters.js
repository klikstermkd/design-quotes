import { FETCH_POSTERS_REQUEST, FETCH_POSTERS_SUCCESS } from '../actions';

const initialState = {
  isLoading: { showPosters: false },
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTERS_REQUEST:
      return { 
        ...state, 
        isLoading: { ...state.isLoading, showPosters: true } 
      };
    case FETCH_POSTERS_SUCCESS:
      return {
        ...state, 
        isLoading: { ...state.isLoading, showPosters: false }, 
        items: Object.keys(action.posters).map(key => action.posters[key]).reverse()
      };
    default:
      return state;
  }
};