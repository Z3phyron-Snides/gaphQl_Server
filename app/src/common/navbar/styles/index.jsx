import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  /* height: 80px; */
  padding: 30px 5%;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const NavbarLogo = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
export const NavbarToggle = styled(motion.div)`
  font-size: 30px;
  z-index: 999;
  color: ${({ theme }) => theme.text};
  margin-left: auto;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export const MenuOverlay = styled(motion.div)`

  background-color: ${({ theme }) => theme.overlays};
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 997;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const NavbarLinksContainer = styled(motion.div)`
  /* text-align: center; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  transform: translateX(0);
  opacity: 1;
  margin-left: auto;
  @media screen and (min-width: 900px) {
  }
  @media screen and (max-width: 900px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding-top: 15%;
    width: 50%;
    z-index: 998;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: ${({ theme }) => theme.background};
  }
`;

export const NavbarLink = styled(NavLink)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.links.color};
  margin: 0 10px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.links.color};
  }
`;

export const ToggleButton = styled.button`
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

  &:hover {
    color: ${({ theme }) => theme.button.hover.text};
    background-color: ${({ theme }) => theme.button.hover.background};
  }
`;

export const SignUpButton = styled(motion.button)`
  color: ${({ theme }) => theme.button.text};
  background-color: ${({ theme }) => theme.button.background};
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  /* font-weight: bold; */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.button.hover.text};
    background-color: ${({ theme }) => theme.button.hover.background};
  }
`;
