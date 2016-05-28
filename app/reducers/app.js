import { TRANSLATE_MENU_BORDER } from '../actions';

const initialState = {
  menuBorderPosition: 62
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRANSLATE_MENU_BORDER:
      return { ...state, menuBorderPosition: action.position };
    default:
      return state;
  }
};