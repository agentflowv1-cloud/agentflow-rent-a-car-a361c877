import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className='max-w-[1280px] mx-auto p-4'>
      <Navbar />
      <h1 className='text-3xl font-bold mb-4'>Welcome to our website</h1>
      <Footer />
    </div>
  );
}

export default App;