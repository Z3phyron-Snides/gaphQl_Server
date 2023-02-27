import React from "react";
import { Formik } from "formik";
import { Button, Error, FormWrapper, Input, Label } from "./styles";
import { gql, useMutation } from "@apollo/client";
import { ADD_TODO } from "../../graphql/mutations";





const Index = () => {
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: addTodo,
              fragment: gql`
                fragment NewTodo on Todo {
                  id
                  text
                  status
                }
              `,
            });
            return [...existingTodos, newTodoRef];
          },
        },
      });
    },
  });

  const initialValues = {
    text: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.text) {
      errors.text = "Required";
    }

    return errors;
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { data } = await addTodo({
        variables: {
          text: values.text,
          status: "new",
        },
      });

      console.log(data.addTodo); // logs the newly created todo
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {(formik) => (
        <FormWrapper>
          <Label htmlFor="text">Add Todo</Label>
          <Input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.text}
          />
          <Error name="text" component={"small"}>
            {formik.touched.text && formik.errors.text}
          </Error>

          <Button type="submit" disabled={!formik.isValid}>
            Add
          </Button>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Index;
