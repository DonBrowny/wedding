import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import 'antd/dist/antd.css';
import About from './pages/About';
import Sudoku from './pages/Sudoku';
import Invitation from './pages/Invitation';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Invitation} exact />
        <Route path="/sudoku" component={Sudoku} exact />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
