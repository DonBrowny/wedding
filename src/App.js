import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import './App.css';
import 'antd/dist/antd.css';
import About from './about/About';
import Sudoku from './sudoku/Sudoku';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sudoku" component={Sudoku} exact />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
