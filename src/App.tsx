import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import CustomBody from './components/CustomBody/CustomBody';

function App() {
  return (
    <>
    <div style={{marginBottom: '30%'}}>
      <Navbar/>
    </div>
    
    <CustomBody />
    </>
  );
}

export default App;
