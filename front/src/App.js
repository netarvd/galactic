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

function App() {
  return (
    <div className='bg-black min-h-screen w-screen object-center '>
    <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
    {/* <Footer /> */}

  </BrowserRouter>   
</div>
  );
}

export default App;

