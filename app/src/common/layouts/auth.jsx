import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useContext } from 'react';
import { ThemeContext } from "../../context/themeContext";
import { BsMoon, BsSun } from "react-icons/bs";

const Index = () => {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <Container>
      <ToggleButton
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        {mode === "dark" ? <BsSun /> : <BsMoon />}
      </ToggleButton>
      <Pages>
        <Outlet />
      </Pages>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
 
  position: relative;
`;

const Pages = styled.div`
  z-index: 1;
`;

 const ToggleButton = styled.button`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.button.text};
  background-color: ${({ theme }) => theme.button.background};
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;
  transition: background-color 0.3s ease;
 position: fixed;
 top: 5%;
 right: 5%;

  &:hover {
    color: ${({ theme }) => theme.button.hover.text};
    background-color: ${({ theme }) => theme.button.hover.background};
  }
`;

export default Index;
