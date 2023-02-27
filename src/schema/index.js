const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");
const Todo = require("../model/todo");

const todoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    todos: {
      type: new GraphQLList(todoType),
      resolve(parents, args) {
        return Todo.find({});
      },
    },
    todo: {
      type: todoType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        return Todo.findById(args.id);
      },
    },
  }),
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addTodo: {
      type: todoType,
      args: {
        text: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "todoStatus",
            values: {
              new: { value: "doing" },
              completed: { value: "done" },
            },
          }),
          defaultValue: "doing",
        },
      },
      resolve(parents, args) {
        const todo = new Todo({
          ...args,
        });

        return todo.save();
      },
    },
    updateTodo: {
      type: todoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        text: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "updateTodoStatus",
            values: {
              new: { value: "doing" },
              completed: { value: "done" },
            },
          }),
        },
      },
      resolve(parents, args) {
        const todo = Todo.findByIdAndUpdate(
          args.id,
          { $set: { ...args } },
          { new: true }
        );

        return todo;
      },
    },
    deleteTodo: {
      type: todoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parents, args) {
        return Todo.findByIdAndDelete(args.id);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation,
});
