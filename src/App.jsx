import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import NotFound from './Components/NotFound'; // NotFound component
import Home from './Components/Home'; // Home component
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        {/* Tambahkan Route lain  */}
      </Routes>
    </>
  );
}

export default App;
