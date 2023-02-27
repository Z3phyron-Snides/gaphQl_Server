import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  padding: 20px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.cards};
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.shadow};
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 0.75rem;
  margin: 0.25rem 0 0 0;
`;

export const Button = styled.button`
  width: 100%;
  /* height: 2rem; */
  margin: 0.5rem 0;
  padding: 10px;
  background-color: #000000;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.button.text};
  background-color: ${({ theme }) => theme.button.background};

  &:hover {
    color: ${({ theme }) => theme.button.hover.text};
    background-color: ${({ theme }) => theme.button.hover.background};
  }
`;
