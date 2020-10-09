import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/sudoku">Play Sudoku </Link>
      <Link to="/about">About Us </Link>
    </>
  );
}

export default Home;
