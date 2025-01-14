import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
