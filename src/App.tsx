import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/home_page';

import SecondPage from './pages/second/second_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/second'} element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
