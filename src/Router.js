import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import './App.css';

const  Router = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about"  element={<About />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;