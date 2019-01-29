import mongoose, { Schema } from 'mongoose'

const AnswerSchema = Schema({
  description: { type: String, required: true },
  createAt: { type: String, required: true }
})

const Answer = mongoose.model('Answer', AnswerSchema)

export default Answer
