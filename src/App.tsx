import React from 'react';
import logo from './logo.svg';
import './App.css';
import JouerPage from './pages/play/play_page';

import CreateQuizPage from './pages/create_quiz/create_quiz_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<JouerPage />} />
          <Route path={'/create_quiz'} element={<CreateQuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
