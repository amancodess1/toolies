import React, { useState } from 'react';
import './passwordStrengthChecker.css';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  // Function to check the strength of the password
  const checkStrength = (password) => {
    let strengthMessage = 'Weak';
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Evaluate the password strength
    if (lengthCriteria && numberCriteria && uppercaseCriteria && specialCharCriteria) {
      strengthMessage = 'Strong';
    } else if (lengthCriteria && (numberCriteria || uppercaseCriteria || specialCharCriteria)) {
      strengthMessage = 'Medium';
    }

    setStrength(strengthMessage);
  };

  // Handle password input changes
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    checkStrength(newPassword); // Check strength as the user types
  };

  return (
    <div className="password-strength-checker">
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="password-input"
      />
      <div className={`strength-meter ${strength.toLowerCase()}`}>
        {strength && <p>{strength}</p>}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
