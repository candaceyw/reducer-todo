import React from 'react';
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('Dark Mode');
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
 
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle" data-testid='toggle'>
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
              value={darkMode || ''}
              data-testid='checkbox'
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
          {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle
        </button> */}
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
