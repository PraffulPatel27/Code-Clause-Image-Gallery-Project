import React from 'react';
import { useState } from 'react'
import './App.css';
import './index.css'
import Navbar from './components/Navbar.jsx'
import ImageCard from './components/Image-Card.jsx';
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* Nav bar */}
      <Navbar />

    
     {/* main section here */}
     <ImageCard />


    {/* footer section here */}
     <Footer />

    </div>
    </>
  )
}

export default App;
