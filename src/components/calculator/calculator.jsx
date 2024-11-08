import React, { useState, useEffect } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Handle button click
  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  // Handle evaluate button click (equals)
  const handleEvaluate = () => {
    try {
      setOutput(eval(input)); // Using eval to evaluate the expression
    } catch (error) {
      setOutput('Error');
    }
  };

  // Handle clear button click
  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  // Handle backspace button click
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  // Function to handle keyboard input
  const handleKeyPress = (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') {
      handleButtonClick(key); 
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      handleButtonClick(key); 
    } else if (key === '(' || key === ')') {
      handleButtonClick(key); 
    } else if (key === '.') {
      handleButtonClick(key); 
    } else if (key === 'Enter') {
      handleEvaluate(); 
    } else if (key === 'Backspace') {
      handleBackspace(); 
    } else if (key === 'Escape') {
      handleClear(); 
    }
  };


  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

   
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]); 

  return (
    <div className="calculator">
      <div className="calculator-display">
        <input
          type="text"
          value={input}
          readOnly
          className="calculator-input"
        />
        <div className="calculator-output">{output}</div>
      </div>
      <div className="calculator-buttons">
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleClear()}>AC</button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
