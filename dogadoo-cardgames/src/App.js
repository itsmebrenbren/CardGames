import './App.css';
import React from 'react';
import TopBottomContainer from './components/TopBottomContainer.jsx';
import MiddleContainer from './components/MiddleContainer.jsx';
import Box from './components/Box.jsx';
import Button from './components/Button.jsx';
import Menu from './components/Menu.jsx';



function App() {
  return (
    <div>
      <Menu></Menu>
      <TopBottomContainer>
        <Box></Box>
        <Box></Box>
        <Box>
          <h2>Computer</h2>
        </Box>
      </TopBottomContainer>
      <MiddleContainer>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </MiddleContainer>
      <TopBottomContainer>
        <Box></Box>
        <Box></Box>
        <Box>
          <Button>Play Card</Button>
          <h2>Human</h2>
        </Box>
      </TopBottomContainer>
    </div>
  );
}

export default App;
