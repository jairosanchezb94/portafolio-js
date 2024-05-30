import React from 'react';
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import useStore from '../../store';
import './modeSwitch.css';

const ModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="checkbox" className="label">
        <FaMoon className="moon-icon" />
        <FaSun className="sun-icon" />
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ModeSwitch;
