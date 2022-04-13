import './App.css';
import React, {Component} from 'react';
import FormLogin from './formLogin';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div class="App">
      <div>
        <Routes>
          <Route path="/">
            <FormLogin/>
            <ClickCounter/>
            <HoverCounter/>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;