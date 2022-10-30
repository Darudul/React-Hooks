import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Context_Api/Header/Header';
import ThemeContext from './components/Context_Api/ThemeContext/ThemeContext';
import GrandPa from './components/GrandPa/GrandPa';
import DataFetching from './components/Hook_useEffect/DataFetching';
import CounterOne from './components/Hook_useReducer/CounterOne';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/grandpa' element={<GrandPa></GrandPa>} />
        <Route path='/theme' element={<ThemeContext></ThemeContext>} />
        <Route path='/reducer' element={<CounterOne />} />
      </Routes>
    </div>
  );
}

export default App;
