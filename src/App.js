import React from 'react';
import Image from "./Components/Image"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import './style.css';

export default function App(){
  return (
    <div className='mainBody'>
      <Image />
      <Main />
      <Footer />
    </div>
  )
}