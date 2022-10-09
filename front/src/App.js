import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='bg-black min-h-screen w-screen object-center '>
    <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>

  </BrowserRouter>   
</div>
  );
}

export default App;

