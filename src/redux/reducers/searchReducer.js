import { combineReducers } from 'redux';
import { SEARCH_WORD ,ADD_TO_HISTORY ,CLEAR_HISTORY } from "../actions/actionTypes";

const searchedWordsReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_WORD:
      return [...state, action.payload];
    case CLEAR_HISTORY:
      return [];
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  searchedWords: searchedWordsReducer,
});

export default rootReducer;