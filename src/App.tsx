import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CustomBody from './components/CustomBody/Body';

function App() {
  return (
    <>
    <div className='navMargin'>
      <Navbar/>
    </div>
    
    <CustomBody />
    </>
  );
}

export default App;
