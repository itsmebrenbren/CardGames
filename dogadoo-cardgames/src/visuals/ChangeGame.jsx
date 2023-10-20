import React, { useState } from 'react';

const ChangeGame = () => {
  const [gameMenuOpen, setGameMenuOpen] = useState(false);

  const ToggleGame = () => {
    setGameMenuOpen(!gameMenuOpen);
  };

  return (
    <div className="menu-container">
      <button className="button" onClick = { ToggleGame }>Change Game</button>
      {gameMenuOpen && (
        <div>
          <button className="button">War</button>
          <button className="button">Egyptian Ratscrew</button>
        </div>
      )}
    </div>
  );
};

export default ChangeGame;