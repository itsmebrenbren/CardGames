import './App.css';
import React, { useState, useEffect } from 'react';
import TopBottomContainer from './visuals/TopBottomContainer.jsx';
import MiddleContainer from './visuals/MiddleContainer.jsx';
import Box from './visuals/Box.jsx';
import CenterBox from './visuals/CenterBox.jsx';
//import addMessage from './visuals/AddMessage.jsx';
//import Message from './visuals/AddMessage';
//import TextBox from './visuals/TextBox.jsx';
import Button from './visuals/Button.jsx';
import Menu from './visuals/Menu.jsx';
//import ratInstance from './ratscrew/InitRat';


//const message = addMessage('welcome u*.*u');
//message = addMessage('your turn!');


function App() {
  //ratStart();
  const [gameState, setGameState] = useState(null);
  const [message, setMessage] = useState('hello');

  const handleGameStart = (gameData) => {
    setGameState(gameData);
  };

  useEffect(() => {
    console.log('gameState has changed:', gameState);
  }, [gameState]);

  console.log(gameState)

  console.log(message);

  let announce = 'welcome u*.*u';

  function handleMessage(){
    setMessage(announce);
  }


  return (
    <div>
      <Menu onGameStart = { handleGameStart }></Menu>
      <TopBottomContainer>
        <Box></Box>
        <CenterBox>
        </CenterBox>
        <Box>
          <h2>Computer</h2>
        </Box>
      </TopBottomContainer>
      <MiddleContainer>
        <Box>
          <div onClick = { handleMessage } className = 'text-box'>{ message }</div>
        </Box>
        <CenterBox>
          <div>
            
          </div>
        </CenterBox>
        <Box></Box>
      </MiddleContainer>
      <TopBottomContainer>
        <Box></Box>
        <CenterBox>
        </CenterBox>
        <Box>
          <Button>Play Card</Button>
          <h2>Human</h2>
        </Box>
      </TopBottomContainer>
    </div>
  );
}

export default App;
