import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './compenents/navbar';
import Hero from './compenents/hero';
import About from './compenents/about';
import Serice from './compenents/service';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <div className='font-serif bg-gray-50/60'>
    <Navbar/>
     <Hero/>
      <About/>
      <Serice/>
      
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
