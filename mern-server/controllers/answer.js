import Answer from "../models/answer.js";

export const getAnswers = async (req, res) => {
    try {
        const answers = await Answer.find({});

        res.status(200).json(answers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const postAnswer = async (req, res) => {
    const answer = req.body;
    const newAnswer = new Answer(answer);

    try {
        await newAnswer.save();

        res.status(201).json(newAnswer);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}