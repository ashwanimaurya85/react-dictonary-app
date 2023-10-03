import React from 'react';
import './App.css';
import {Routes , Route } from 'react-router-dom';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import History from './Components/History';
import WordMeaning from './Components/WordDetails';

function App() {
  document.title='Dictonary App';
  return (
    <div className="w-screen h-screen App">
      <Header/>
      <Routes>
        <Route path="/" element = {<MainPage/>}/>
        <Route path="/history" element = {<History/>}/>
        <Route path="/word/:word" component={<WordMeaning/>} /> {/* Dynamic route */}
      </Routes>
    </div>
  );
}

export default App;
