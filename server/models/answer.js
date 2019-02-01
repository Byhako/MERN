import mongoose, { Schema } from 'mongoose'

const AnswerSchema = new Schema({
  description: { type: String, required: true },
  createAt: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

const Answer = mongoose.model('Answer', AnswerSchema)

export default Answer
