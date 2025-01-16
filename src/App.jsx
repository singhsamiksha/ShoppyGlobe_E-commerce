import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </div>
);

export default App;
