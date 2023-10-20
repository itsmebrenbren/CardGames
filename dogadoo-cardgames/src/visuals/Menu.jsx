import React, { useState } from 'react';
import Button from "./Button.jsx";

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
              <Button>Egyptian War</Button>
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
