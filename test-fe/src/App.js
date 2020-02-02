import React from 'react';
import './App.css';

// Components
import Loader from './components/Loader'
import Header from './components/layout/Header'
import Dashboard from './components/leads/Dashboard'
function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Dashboard/>
      </div>
    </div>
      
  );
}

export default App;
