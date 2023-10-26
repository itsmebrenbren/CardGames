import './App.css';
import React from 'react';
import TopBottomContainer from './visuals/TopBottomContainer.jsx';
import MiddleContainer from './visuals/MiddleContainer.jsx';
import Box from './visuals/Box.jsx';
import CenterBox from './visuals/CenterBox.jsx';
//import addMessage from './visuals/AddMessage.jsx';
import TextBox from './visuals/TextBox.jsx';
import Button from './visuals/Button.jsx';
import Menu from './visuals/Menu.jsx';
//import StartButton from './components/visuals/StartButton';
import TableHand from './visuals/TableHand';
import HumanHand from './visuals/HumanHand';
import ComputerHand from './visuals/ComputerHand';
import ratStart from './ratscrew/RatscrewStart';

// const message = addMessage('welcome u*.*u');
//message = addMessage('your turn!');


function App() {
  ratStart();
  let message = '';


  return (
    <div>
      <Menu></Menu>
      <TopBottomContainer>
        <Box></Box>
        <CenterBox>
          <ComputerHand></ComputerHand>
        </CenterBox>
        <Box>
          <h2>Computer</h2>
        </Box>
      </TopBottomContainer>
      <MiddleContainer>
        <Box>
          <TextBox>{ message }</TextBox>
        </Box>
        <CenterBox>
          <TableHand></TableHand>
        </CenterBox>
        <Box></Box>
      </MiddleContainer>
      <TopBottomContainer>
        <Box></Box>
        <CenterBox>
          <HumanHand></HumanHand>
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
