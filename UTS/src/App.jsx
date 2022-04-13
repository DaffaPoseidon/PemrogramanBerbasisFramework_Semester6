import './App.css';
import React, {Component} from 'react';
import FormLogin from './formLogin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div class="App">
      <div>
        <Routes>
          <Route path="/">
            <FormLogin/>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;