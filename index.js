import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import './index.css';
import HomePage from './landinng_page/home/HomePage';
import Navbar from './landinng_page/Navbar';
import Signup from './landinng_page/signup/Signup';
import Pricingpg from './landinng_page/pricing/Pricingpg';

import AboutPage from './landinng_page/about/AboutPage';

import Footer from './landinng_page/Footer';
import SupportPage from './landinng_page/supports/SupportPage';
import NotFound from './landinng_page/NotFound';
import ProductPage from './landinng_page/products/ProductPage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
  
    <Route path="/" element={ <HomePage/>}></Route>
    
    <Route path="/Signup" element={ <Signup/>}></Route>
    
   
    <Route path="/Pricing" element={ <Pricingpg/>}></Route>
    
    <Route path="/about" element={ <AboutPage/>}></Route>
    <Route path="/supports" element={ <SupportPage/>}></Route>
    
   
    <Route path="/Product" element={ <ProductPage/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  
);


