import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.4;
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  animation: ${slideUp} 1s ease forwards 3s;
`;

const LoadingText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.text};
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${({ theme }) => theme.text};
  opacity: 0.4;
  animation: ${pulse} 1s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
`;



const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingText>Goal_Setter</LoadingText>
      <Circle>
        <Dot delay={0} />
        <Dot delay={0.2} />
        <Dot delay={0.4} />
      </Circle>
    </LoaderContainer>
  );
};

export default Loader;
