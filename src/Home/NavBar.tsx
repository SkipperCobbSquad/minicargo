import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../store';

const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #363945;
  -webkit-app-region: drag;
  user-select: none;
`;

const TopTitle = styled.p`
  margin: 3px 0 3px 7px;
  color: #efc48f;
`;

const TopUserSelect = styled.p`
  margin: 3px 0 3px 0;
  color: #efc48f;
`

const TopButtonsWrapper = styled.div`
  display: flex;
  justify-content: row;
`;

const TopButton: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px 0 7px;
  background: #474a55;
  font-size: 20px;
  cursor: pointer;
  border-left: ${(props: any) => (props.close ? '1px solid #d9a86c' : 'none')};
  -webkit-app-region: no-drag;
  &:hover {
    color: ${(props: any) => (props.close ? '#ff2400' : '#efc48f')};
  }
`;

export const TopBar = () => {
  const userSelect = useSelector((state: ReduxStore) => state.userSelect);
  return (
    <TopDiv>
      <TopTitle>miniCargo</TopTitle>
      <TopUserSelect>{userSelect.toUpperCase()}</TopUserSelect>
      <TopButtonsWrapper>
        <TopButton>
          <i className="icofont-minus"></i>
        </TopButton>
        <TopButton close={true}>
          <i className="icofont-close"></i>
        </TopButton>
      </TopButtonsWrapper>
    </TopDiv>
  );
};
