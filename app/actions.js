export const SHOW_REQUIRED_FIELDS_MESSAGE = 'SHOW_REQUIRED_FIELDS_MESSAGE';
export const ADD_QUOTE_REQUEST = 'ADD_QUOTE_REQUEST';
export const ADD_QUOTE_SUCCESS = 'ADD_QUOTE_SUCCESS';
export const ADD_QUOTE_FAILURE = 'ADD_QUOTE_FAILURE';
export const FETCH_QUOTES_REQUEST = 'FETCH_QUOTES_REQUEST';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_POSTERS_REQUEST = 'FETCH_POSTERS_REQUEST';
export const FETCH_POSTERS_SUCCESS = 'FETCH_POSTERS_SUCCESS';
export const TRANSLATE_MENU_BORDER = 'TRANSLATE_MENU_BORDER';

export const fetchQuotes = () => ({ type: FETCH_QUOTES_REQUEST });
export const fetchBooks = () => ({ type: FETCH_BOOKS_REQUEST });
export const fetchPosters = () => ({ type: FETCH_POSTERS_REQUEST });

export const addQuote = quote => {
  var isEmpty = (quote.text === '' || 
                 quote.author === '' || 
                 quote.source === '') ? true : false;

  return isEmpty ? 
    { type: SHOW_REQUIRED_FIELDS_MESSAGE } : 
    { type: ADD_QUOTE_REQUEST, quote };
};

export const translateMenuBorder = (position) => ({ type: TRANSLATE_MENU_BORDER,  position });