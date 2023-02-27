import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Fira Code';
    
 
    }

    body {
      background: ${({ theme }) => theme.background};
    }

    .editor {
 
    /* overflow: hidden; */
    /* background: transparent; */
    border-radius: 20px;
    color: ${(props) => props.theme.text};
    background: #eeecec;
    /* border: none; */
}


`;
export const darkTheme = {
  background: "rgb(30, 30, 30)",
  text: "#ffffff",
  colored: "#fca311ff",
  shadow: "rgba(255, 255, 255, 0.098)",
  content: "rgba(179, 179, 179, 0.771)",
  border: "rgba(255, 255, 255, 0.1)",
  links: {
    color: "#e5e5e5ff",
    active: "#fca311ff",
  },
  button: {
    background: "#ffffff",
    text: "#010101",
    hover: {
      background: "#000000",
      text: "#ffffff",
    },
  },
  overlays: "rgba(0, 0, 0, 0.7)",
  cards: "#1b1b1b",
};

export const lightTheme = {
  background: "#ffffff",
  text: "#000000ff",
  colored: "#fca311ff",
  shadow: "rgba(0, 0, 0, 0.15)",
  content: "#c2c2c2",
  border: "rgba(0, 0, 0, 0.1)",
  links: {
    color: "#3d3d3d",
    active: "#000000",
  },
  button: {
    background: "#000000",
    text: "#ffffff",
    hover: {
      background: "rgba(243, 243, 243, 0.706)",
      text: "rgb(5, 5, 5)",
    },
  },
  overlays: "rgba(255, 255, 255, 0.7)",
  cards: "#ffffffff",
};


