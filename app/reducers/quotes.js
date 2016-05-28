 import { 
  SHOW_REQUIRED_FIELDS_MESSAGE,
  ADD_QUOTE_REQUEST,
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  ADD_QUOTE_SUCCESS,
  ADD_QUOTE_FAILURE
} from '../actions';

const initialState = {
  formEmpty: false,
  addQuoteFailure: false,
  isLoading: { addQuote: false, showQuotes: false },
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_REQUIRED_FIELDS_MESSAGE:
      return { ...state, formEmpty: true };
    case ADD_QUOTE_REQUEST:
      return {
        ...state, 
        isLoading: { ...state.isLoading, addQuote: true }, 
        formEmpty: false, 
        items: [action.quote, ...state.items],
        addQuoteFailure: false
      };
    case ADD_QUOTE_SUCCESS:
      return {
        ...state, 
        isLoading: { ...state.isLoading, addQuote: false }
      };
    case ADD_QUOTE_FAILURE:
      return { ...state, addQuoteFailure: true };
    case FETCH_QUOTES_REQUEST:
      return {
        ...state, 
        isLoading: { ...state.isLoading, showQuotes: true }
      };
    case FETCH_QUOTES_SUCCESS:
      return {
        ...state, 
        isLoading: { ...state.isLoading, showQuotes: false }, 
        items: Object.keys(action.quotes).map(key => action.quotes[key]).reverse()
      };
    default:
      return state;
  }
};