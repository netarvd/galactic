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

function App() {
  return (
    <div className="App">
<BrowserRouter>
    {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
    {/* <Footer /> */}

  </BrowserRouter>   
</div>
  );
}

export default App;

