import './App.css';
import React, {useState, useEffect} from 'react';
import TopBottomContainer from './visuals/TopBottomContainer.jsx';
import MiddleContainer from './visuals/MiddleContainer.jsx';
import Box from './visuals/Box.jsx';
import CenterBox from './visuals/CenterBox.jsx';
//import addMessage from './visuals/AddMessage.jsx';
import TextBox from './visuals/TextBox.jsx';
import Button from './visuals/Button.jsx';
import Menu from './visuals/Menu.jsx';
//import StartButton from './components/visuals/StartButton';
//import TableHand from './visuals/TableHand';
//import HumanHand from './visuals/HumanHand';
import ComputerHand from './visuals/ComputerHand';
//import ratInstance from './ratscrew/InitRat';


//const message = addMessage('welcome u*.*u');
//message = addMessage('your turn!');


function App() {
  //ratStart();
  const [gameState, setGameState] = useState(null);

  const handleGameStart = (gameData) => {
    setGameState(gameData);
  };

  useEffect(() => {
    console.log('gameState has changed:', gameState);
  }, [gameState]);

  let message = '';
  console.log(gameState)

  return (
    <div>
      <Menu onGameStart={handleGameStart}></Menu>
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
          <TextBox>{message}</TextBox>
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
