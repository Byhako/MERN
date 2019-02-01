import mongoose, { Schema } from 'mongoose'

const QuestionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  createAt: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  answer: [{type: Schema.Types.ObjectId, ref: 'Answer', default: []}]
})

const Question = mongoose.model('Question', QuestionSchema)

export default Question
