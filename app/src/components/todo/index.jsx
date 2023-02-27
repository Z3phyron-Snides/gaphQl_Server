import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { GET_TODOS } from "../../graphql/queries";
import { DELETE_TODO, UPDATE_TODO } from "../../graphql/mutations";
import {
  CancelButton,
  DeleteButton,
  EditButton,
  EditInput,
  SaveButton,
  ToDoContainer,
  ToDoText,
} from "./styles";

const ToDo = ({ todo, onDelete }) => {
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO, {
    update: (cache) => {
      const existingData = cache.readQuery({ query: GET_TODOS });
      const newTodos = existingData.todos.filter((t) => t.id !== todo.id);
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: newTodos },
      });
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo?.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewText(todo?.text);
  };

  const handleTextChange = (event) => {
    setNewText(event.target.value);
  };

  const handleChange = () => {
    if (newText !== todo.text) {
      updateTodo({
        variables: {
          id: todo.id,
          text: newText,
        },
      });
    } else {
      updateTodo({
        variables: {
          id: todo.id,
          status: "completed",
        },
      });
    }

    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    deleteTodo({
      variables: {
        id: todo.id,
      },
    });
    onDelete(todo.id);
  };

  return (
    <ToDoContainer
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <input
        type="checkbox"
        checked={todo.status === "done"}
        onChange={handleChange}
      />

      {isEditing ? (
        <>
          <EditInput type="text" value={newText} onChange={handleTextChange} />
          <CancelButton onClick={handleCancelClick}>
            <FaTimes />
          </CancelButton>
          <SaveButton onClick={handleChange}>
            <FaSave />
          </SaveButton>
        </>
      ) : (
        <>
          <ToDoText checked={todo.status === "done"}>{todo.text}</ToDoText>
          <EditButton onClick={handleEditClick}>
            <FaEdit />
          </EditButton>
        </>
      )}
      <DeleteButton onClick={handleDeleteClick}>
        <FaTrashAlt />
      </DeleteButton>
    </ToDoContainer>
  );
};

export default ToDo;
