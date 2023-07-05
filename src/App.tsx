import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CustomBody from './components/CustomBody/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id='colors'>
      <div className='navMargin'>
        <Navbar />
      </div>
      <CustomBody />
      <Footer/>
    </div>
  );
}

export default App;
