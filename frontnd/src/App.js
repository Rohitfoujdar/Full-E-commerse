import './App.css';
import Course from './components/Course';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './home/Home';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
     <>
       <div className='dark:bg-slate-900 dark:text-white'>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course' element={<Course/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
       </div>
     </>
  );
}

export default App;
