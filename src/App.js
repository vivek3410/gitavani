import './App.css';
import './bootstrap.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Whatwedo from './components/whatwedo';
import Portfolio from './components/portfolio';

function App() {
  
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/whatwedo' element={<Whatwedo />} />
        <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
  );
}


export default App;
