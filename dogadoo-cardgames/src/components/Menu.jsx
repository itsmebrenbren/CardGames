import React, { useState } from 'react';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu-container">
      <button className="button" onClick = { ToggleMenu }>Menu</button>
      {menuOpen && (
        <div>
          <button className="button">Start</button>
          <button className="button">New Game</button>
          <button className="button">Change Game</button>
          <button className="button">How do I play this?!?!</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
