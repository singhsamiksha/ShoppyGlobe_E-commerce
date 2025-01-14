import React from 'react';
import './App.css'
import Welcome from './components/Welcome';
import Header from './components/Header';



function App() {
  return (
    <div className="app">
    <Header />
    <Welcome/>
  </div>
  )
}

export default App
