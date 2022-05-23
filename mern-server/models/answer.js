import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    x: Number,
    y: Number,
})

export default mongoose.model("Answer", answerSchema);