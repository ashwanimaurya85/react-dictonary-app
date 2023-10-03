import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToHistory, clearHistory } from '../redux/actions/searchAction';
import {NavLink } from 'react-router-dom'; 


const History = () => {
  const dispatch = useDispatch();
  const searchedWords = useSelector((state) => state.searchedWords);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const handleWordClick = (word) => {
    if (!searchedWords.includes(word)) {
      dispatch(addToHistory(word));
    }
  };
  
  const uniqueWords = [...new Set(searchedWords)];

  return (
    <div className='p-5'>
      <h2 className='my-5 text-2xl font-bold underline'>Search History</h2>
      <ul>
        {uniqueWords.map((word, index) => (
          <li key={index}>
            <NavLink to={`/word/${word}`} onClick={() => handleWordClick(word)}>
              {word}
            </NavLink>
          </li>
        ))}
      </ul>
      <button onClick={handleClearHistory} className='p-2 my-3 text-white bg-black border-2 border-black rounded'>Clear History</button>
    </div>
  );
};

export default History;
