import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <ShoppingList />
    </div>
  );
}

export default App;
