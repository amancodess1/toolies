import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Calculator from './components/calculator/calculator';
import Stopwatch from './components/stopwatch/stopwatch';
import SudokuSolver from './components/sudoku-solver/sudoku-solver';
import Home from './components/home/home';
import './index.css';

const App = () => (
  <Router>
    <nav>
  <Link to="/">Home</Link>
  <Link to="/calculator">Calculator</Link>
  <Link to="/stopwatch">Stopwatch</Link>
  <Link to="/sudoku-solver">Sudoku Solver</Link>
  </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/sudoku-solver" element={<SudokuSolver />} />
    </Routes>
  </Router>
);

export default App;
