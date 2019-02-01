import Debug from 'debug'
import { Question } from '../models'
const debug = new Debug('server:db-api:question')



export default {
  findAll: async () => {
    debug('Finding all questions')
    return Question.find().populate('answer')
  },

  findById: async (id) => {
    debug(`Finding questions with id ${id}`)
    return Question
      .findOne({id})
      .populate('user')
      .populate({
        path: 'answer',
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
  }
}
