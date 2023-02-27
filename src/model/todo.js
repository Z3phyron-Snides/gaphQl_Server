const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoShema = new Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["doing", "done"],
  },
});

module.exports = Todo = mongoose.model("Todo", todoShema);
