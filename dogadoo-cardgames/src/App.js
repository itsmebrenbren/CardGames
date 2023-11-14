import './App.css';
import React from 'react';
import { ratscrewAtom } from './atoms/RatscrewAtom.js';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai';
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



function App() {
  const [rat, setRat] = useAtom(ratscrewAtom);

  const updateMessage = () => {
    setRat((prevRat) => ({
      ...prevRat,
      message: "welcome u*.*u",
    }));
  };

  const handleGameStart = () => {
  };



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
          <div className = 'text-box' onClick = { updateMessage }>{ rat.message }</div>
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
