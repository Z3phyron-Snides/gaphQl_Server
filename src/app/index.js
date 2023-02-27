const express = require("express");
const { errorHandler } = require("../middlewares/errorMiddleware");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema");

// const rootRoutes = require("../routes/root");
const connectDB = require("../config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
// app.use("/", rootRoutes);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

//serve client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../app/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../../", "app", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production!!!"));
}

app.use(errorHandler);

module.exports = app;
