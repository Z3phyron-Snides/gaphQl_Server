import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      text
      status
    }
  }
`;


export {GET_TODOS}