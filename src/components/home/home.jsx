import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import PasswordStrengthChecker from '../password-strength/password-strength';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to the Web Tools App</h1>
      <p className={styles.subtitle}>Choose a tool to get started:</p>
      <div className={styles.toolsContainer}>
        <Link to="/calculator" className={styles.toolCard}>
          <div className={styles.toolIcon}>🧮</div>
          <h2 className={styles.toolTitle}>Calculator</h2>
        </Link>
        <Link to="/stopwatch" className={styles.toolCard}>
          <div className={styles.toolIcon}>⏱️</div>
          <h2 className={styles.toolTitle}>Stopwatch</h2>
        </Link>
        <Link to="/sudoku-solver" className={styles.toolCard}>
          <div className={styles.toolIcon}>🧩</div>
          <h2 className={styles.toolTitle}>Sudoku Solver</h2>
        </Link>
        <PasswordStrengthChecker />
      </div>
    </div>
  );
};

export default Home;
