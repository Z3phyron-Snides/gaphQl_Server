import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: center;

  .greeting {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
  }

  .title {
    color: ${({ theme }) => theme.content};
  }
`;


export const TodoContainer = styled.div`
  max-height: 50vh;
  overflow-y: scroll;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  /* Style the scrollbar */
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;