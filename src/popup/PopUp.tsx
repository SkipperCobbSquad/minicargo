import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const Foreground = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000af;
  animation: ${fadeIn} 0.5s linear;
`;

const PopDiv = styled.div`
  display: flex;
  width: 40rem;
  height: 40vh;
  background: #2a2c3e;
`;

export const PopUp = () => {
  return (
    <Foreground>
      <PopDiv></PopDiv>
    </Foreground>
  );
};
