import Debug from 'debug'
import app from './app'

const PORT = 3000
const debug = new Debug('server:index')


app.listen(PORT, () => {
  debug(`Server running in port ${PORT}`)
})
