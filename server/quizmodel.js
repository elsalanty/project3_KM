const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let QuizSchema = new Schema({
  userAnswers: {
    type: Array
  },
  score: {
    type: Number
  }
});

const Quiz = mongoose.model("quiz", QuizSchema);

module.exports = Quiz;
