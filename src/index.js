import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './compenents/navbar';
import Hero from './compenents/hero';
import About from './compenents/about';
import Serice from './compenents/service';
import gsap from 'gsap';
import{ ScrollTrigger} from "gsap/ScrollTrigger"
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
   <div className='font-serif '>
    <div className="min-h-screen w-full relative">
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
    }}
  />
  <div className=' relative z-10'>
 <Navbar/>
     <Hero/>
      <About/>
      <Serice/>
      </div>
</div>
    
      
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
