import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Context_Api/Header/Header';
import GrandPa from './components/GrandPa/GrandPa';
import DataFetching from './components/Hook_useEffect/DataFetching';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/grandpa' element={<GrandPa></GrandPa>} />
      </Routes>
    </div>
  );
}

export default App;
