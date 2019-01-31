import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl } from './config'

const PORT = 3000
const debug = new Debug('server:index')


async function start () {
  await mongoose.connect(mongoUrl, { useNewUrlParser: true })
  debug('Connect MongoDb Ok.')
  app.listen(PORT, () => {
    debug(`Server running in port ${PORT}`)
  })
}

start()
