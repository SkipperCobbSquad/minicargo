import React from 'react';
import styled from 'styled-components';

import {TopBar} from './Home/NavBar'

const MainAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #111;
`;


function App() {
  return (
    <MainAppDiv>
      <TopBar></TopBar>
    </MainAppDiv>
  );
}

export default App;
