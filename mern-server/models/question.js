import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  question: String,
  option1: String,
  option2: String,
  option3: String,
});

export default mongoose.model("Question", questionSchema);
