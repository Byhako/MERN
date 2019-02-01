import Debug from 'debug'
import { Question } from '../models'
const debug = new Debug('server:db-api:question')



export default {
  findAll: async () => {
    debug('Finding all questions')
    return await Question.find().populate('answer')
  },

  findById: async (id) => {
    debug(`Finding questions with id ${id}`)
    return await Question
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
    
  }
}
