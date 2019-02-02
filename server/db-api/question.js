import Debug from 'debug'
import mongoose, { Schema } from 'mongoose'
import { Question, Answer } from '../models'
const debug = new Debug('server:db-api:question')



export default {
  findAll: async () => {
    debug('Finding all questions')
    return Question.find()
      .populate('user')
      .populate('answers')
      .populate({
        path: 'answers',
        populate: {path: 'user'}
      })
  },

  findById: async (id) => {
    debug(`Finding questions with id ${id}`)
    return Question
      .findOne({"_id" : mongoose.Types.ObjectId(id)})
      .populate('user')
      .populate({
        path: 'answers',
        options: { sort: '-createAt' },
        populate: {
          path: 'user',
          model: 'User'
        }
      })
  },

  create: async (q) => {
    debug('Creando question')
    const question = new Question(q)
    return question.save()
  },

  createAnswer: async (q, a) => {
    const answer = new Answer(a)
    debug('createAnswer: ',answer)
    const saveAnswer = await answer.save()
    q.answers.splice(0,0, answer)
    debug(q)
    await q.save()
    return saveAnswer
  }
}
