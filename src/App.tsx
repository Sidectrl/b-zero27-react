import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CustomBody from './components/CustomBody/Body';

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
