// styles.js

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Text = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Button = styled(motion.button)`
  background-color: #000000;
  a {
    color: white;
  }

  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
