import { gql } from "@apollo/client";

const ADD_TODO = gql`
  mutation addTodo($text: String!, $status: todoStatus) {
    addTodo(text: $text, status: $status) {
      id
      text
      status
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      text
      status
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $text: String, $status: updateTodoStatus) {
    updateTodo(id: $id, text: $text, status: $status) {
      id
      text
      status
    }
  }
`;

export { ADD_TODO, UPDATE_TODO, DELETE_TODO };
