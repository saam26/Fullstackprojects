import React from 'react';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Header from './Header.js';

function App() {
  return (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
