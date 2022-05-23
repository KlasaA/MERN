import Question from "../models/question.js";

export const getQuestions = async (req, res) => {
  let questionId = req.params.id;
  try {
    const questions = await Question.find({ number: questionId });

    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
