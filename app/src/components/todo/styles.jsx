import styled from "styled-components";
import { motion } from "framer-motion";

export const ToDoContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.content};
  border-radius: 4px;
  padding: 5px 8px;
  width: 90%;
  margin: auto;
  gap: 10px;
`;

export const ToDoText = styled.p`
  margin-left: 10px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.content};
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  outline: none;
  border: none;
  margin-left: auto;
`;

export const CancelButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.content};
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  outline: none;
  border: none;
  margin-left: auto;
`;

export const SaveButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.content};
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  outline: none;
  border: none;

  &:hover {
    background-color: none;
  }
`;

export const EditInput = styled.input`
  /* styles for the input field */
  border-radius: 4px;
  width: 100%;
  padding: 3px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.text};
  background: rgba(82, 82, 82, 0.232);
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  color: rgba(255, 0, 34, 0.554);
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  outline: none;
  border: none;
  margin-left: auto;
`;
