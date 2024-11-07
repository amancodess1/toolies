import React, { useState, useEffect } from 'react';
import styles from './stopwatch.module.css';

const Stopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  // Start or stop the stopwatch
  const toggleTimer = () => {
    if (running) {
      clearInterval(timer); // Stop the stopwatch
    } else {
      const newTimer = setInterval(() => {
        setMilliseconds((prev) => {
          if (prev === 99) {
            setSeconds((prev) => {
              if (prev === 59) {
                setMinutes((prev) => {
                  if (prev === 59) {
                    setHours((prev) => prev + 1);
                    return 0;
                  }
                  return prev + 1;
                });
                return 0;
              }
              return prev + 1;
            });
            return 0;
          }
          return prev + 1;
        });
      }, 10); // Update every 10 milliseconds
      setTimer(newTimer);
    }
    setRunning(!running);
  };

  // Reset the stopwatch
  const resetTimer = () => {
    clearInterval(timer);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setRunning(false);
  };

  // Format time to be two digits for consistency
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className={styles.stopwatchContainer}>
      <h2 className={styles.title}>Stopwatch</h2>
      <div className={styles.timeDisplay}>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}:{formatTime(milliseconds)}
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={toggleTimer} className={styles.button}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={resetTimer} className={`${styles.button} ${styles.resetButton}`}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
