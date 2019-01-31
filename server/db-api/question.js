import Debug from 'debug'
import { Question } from '../models'
const debug = new Debug('server:db-api:question')



export default {
  findAll: async () => {
    debug('Finding all questions')
    return await Question.find().populate('answer')
  }
}
