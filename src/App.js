import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Feature from './components/Feature';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Carousel />
     <Card />
     <Feature />
     <Footer />
    
    </div>
  );
}

export default App;
