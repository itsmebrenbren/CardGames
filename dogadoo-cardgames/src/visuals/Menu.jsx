import React, { useState } from 'react';
import Button from "./Button.jsx";
// import InitRat from "../ratscrew/InitRat.js"

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gameMenuOpen, setGameMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleGame = () => {
    setGameMenuOpen(!gameMenuOpen);
  };

  return (
    <div className = "menu-container">
      <button className = "button" onClick = { toggleMenu }>Menu</button>
      {menuOpen && (
        <div>
          <Button>New Game</Button>
          <button className = "button" onClick = { toggleGame }>Change Game</button>
          {gameMenuOpen ? (
            <div className = "change-game-container">
              <button className = "button">Egyptian War</button>
              <Button>War</Button>
            </div>
          ): null}
          <Button>How do I play this?!?!</Button>
        </div>
      )}
    </div>
  );
};

export default Menu;
