import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CustomBody from './components/CustomBody/Body';

function App() {
  return (
    <div id='colors'>
      <div className='navMargin'>
        <Navbar />
      </div>

      <CustomBody />
    </div>
  );
}

export default App;
