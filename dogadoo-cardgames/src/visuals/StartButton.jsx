import React, { useState } from 'react';


const StartButton = () => {
  const [buttonVisible, setButtonVisible] = useState(true); //initializes buttonVisible variable to true using the useState hook
  //setButtonVisible function updates the buttonVisible state

  const handleStart = () => { //triggers when start button is clicked
    // Perform any actions you need when the start button is clicked
    // For example, trigger the start of a specific game
    // Your logic for starting the game goes here

    // Hide the button after it is clicked
    setButtonVisible(false); //then updates the buttonVisible useState
  };

  return (
    <div>
      {buttonVisible && ( //checks whether buttonVisible === true, onClick={handleStart} triggers the function when the button is clicked
        <button className="button" onClick={handleStart}>
          Start
        </button>
      )}
      {buttonVisible || <StartGame />} {/* Render StartGame when button is not visible */}
    </div>
  );
};

export default StartButton;
