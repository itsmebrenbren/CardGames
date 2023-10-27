import React, { useState } from 'react';
import Button from "./Button.jsx";
// import InitRat from "../ratscrew/InitRat.js"
import ratStart from '../ratscrew/RatscrewStart';

const Menu = ({ onGameStart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gameMenuOpen, setGameMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleGame = () => {
    setGameMenuOpen(!gameMenuOpen);
  };

  const handleRatStart = () => {
    const gameData = ratStart(); // Assuming ratStart returns the game data
    onGameStart(gameData); // Update the state in the parent component
    console.log(gameData);
    toggleGame();
    toggleMenu();
  };

  const handleWarStart = () => {
    toggleGame();
    toggleMenu();
  }

  return (
    <div className = "menu-container">
      <button className = "button" onClick = { toggleMenu }>Menu</button>
      {menuOpen && (
        <div>
          <Button>New Game</Button>
          <button className = "button" onClick = { toggleGame }>Change Game</button>
          {gameMenuOpen ? (
            <ul className = "change-game-container">
              <li onClick = { handleRatStart } className = "button2">Egyptian War</li>
              <li onClick = { handleWarStart } className = "button2">War</li>
            </ul>
          ): null}
          <Button>How do I play this?!?!</Button>
        </div>
      )}
    </div>
  );
};

export default Menu;
