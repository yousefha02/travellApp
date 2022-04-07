import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Slider from './Home/Slider';
import Services from './Home/Services';
import About from './Home/About';
import Packages from './Home/Packages';
import Book from './Home/Book';
import Footer from './Home/Footer';
import { Routes,Route } from 'react-router-dom';
import AboutUs from './About/AboutUs';
import Pack from './Packages/Pack';
import BookNow from './Book/BookNow';

function App() {

  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" 
          element={
          <div>
            <Slider/>
            <Services/>
            <About/>
            <Packages/>
            <Book/>
            </div>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path='/packages' element={<Pack/>}/>
          <Route path='/book' element={<BookNow/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
