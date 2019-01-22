// import http from 'http'
import Debug from 'debug'
import app from './app'

const PORT = 3000
const debug = new Debug('server:index')

// const app = http.createServer(function (req, res) {
//   res.writeHead(200, {'content-Type': 'text/plain'})
//   res.write('Hola ')
//   res.end()
// })

app.listen(PORT, () => {
  debug(`Server running in port ${PORT}`)
})
