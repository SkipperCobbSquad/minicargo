import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { ReduxStore } from './store';
import { ActionUserSelectorType } from './reducers/userSelect';
import { changeUserSelect } from './actions/changeUserSelect';

import { TopBar } from './Home/NavBar';

import Logo from './miniCargoLogo.svg';

const MainAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #111;
`;

const ContentDiv = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const LeftBarDiv = styled.div`
  display: flex;
  flex: 1;
  width: 20%;
  flex-direction: column;
  justify-content: space-between;
  background: #363945;
  box-shadow: inset 0 0 10px #000000;
`;

const LogoHolder = styled.div`
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LogoImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const NavDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 10px;
  padding: 0 7px 0 7px;
`;

const NavItem = styled.div`
  display: flex;
  flex: 1;
  background: #474a55;
  box-shadow: inset 0 0 5px #000000;
  justify-content: space-around;
  align-items: center;
  margin-top: 3px;
  color: #b7bcc9;
  user-select: none;
`;

const NavItemP = styled.p`
  width: 60%;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  align-content: center;
  text-align: center;
  margin-bottom: 10px;
  color: #767b83;
`;

function App() {
  const userSelect = useSelector((state: ReduxStore) => state.userSelect);
  const dispatch = useDispatch();
  dispatch(changeUserSelect(ActionUserSelectorType.store));
  return (
    <MainAppDiv>
      <TopBar></TopBar>
      <ContentDiv>
        <LeftBarDiv>
          <LogoHolder>
            <LogoImage src={Logo} alt="Logo"></LogoImage>
          </LogoHolder>
          <NavDiv>
            <NavItem>
              <NavItemP>Incoming</NavItemP>
              <i className="icofont-download"></i>
            </NavItem>
            <NavItem>
              <NavItemP>Store</NavItemP>
              <i className="icofont-package"></i>
            </NavItem>
            <NavItem>
              <NavItemP>Outcoming</NavItemP>
              <i className="icofont-upload-alt"></i>
            </NavItem>
            <NavItem>
              <NavItemP>Stats</NavItemP>
              <i className="icofont-chart-line"></i>
            </NavItem>
            <NavItem>
              <NavItemP>Settings</NavItemP>
              <i className="icofont-settings-alt"></i>
            </NavItem>
          </NavDiv>
          <InfoDiv>
            <p style={{ margin: 0 }}> Jarvis-Systems side project</p>
          </InfoDiv>
        </LeftBarDiv>
      </ContentDiv>
    </MainAppDiv>
  );
}

export default App;
