import { SEARCH_WORD ,ADD_TO_HISTORY ,CLEAR_HISTORY } from "./actionTypes";
// Action creators
export const searchWord = (word) => ({
    type: SEARCH_WORD,
    payload: word,
  });
  
  export const addToHistory = (word) => ({
    type: ADD_TO_HISTORY,
    payload: word,
  });
  
  export const clearHistory = () => ({
    type: CLEAR_HISTORY,
  });
