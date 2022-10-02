import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom"; 
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SolarWind from './components/SolarWind';

function App() {
  return (
    <div className='bg-black min-h-screen w-screen object-center '>
    <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/solar-wind" element={ <SolarWind type='C2.4'/>} />
      </Routes>
    {/* <Footer /> */}

  </BrowserRouter>   
</div>
  );
}

export default App;

