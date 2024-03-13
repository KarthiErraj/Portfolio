import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Education from './Components/Education';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
  <div>

     
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Education' element={<Education/>}/>
    <Route path='/Projects' element={<Project/>}/>
    <Route path='/Skills' element={<Skills/>}/>
    <Route path='/Contact' element={<Contact/>}/>

    </Routes></BrowserRouter>
   
  </div>
  );
}

export default App;
