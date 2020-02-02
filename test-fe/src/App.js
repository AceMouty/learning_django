import React from 'react';
import './App.css';
// Components
import Header from './components/layout/Header'
import Dashboard from './components/leads/Dashboard'
// Redux
import { Provider } from "react-redux"
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <div className="container">
          <Dashboard/>
        </div>
      </div>
      </Provider>
  );
}

export default App;
