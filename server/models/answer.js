import mongoose, { Schema } from 'mongoose'

const { ObjetcId } = Schema.Types

const AnswerSchema = new Schema({
  description: { type: String, required: true },
  createAt: { type: String, required: true },
  user: { type: ObjetcId, ref: 'User', required: true }
})

const Answer = mongoose.model('Answer', AnswerSchema)

export default Answer
