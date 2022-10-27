import http from 'http'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import app from './src/app'
// connect db
import './database'
const port = process.env.PORT

const server = http.createServer(app)

server.listen(port, () => {
  console.log(
    `[server]: CORS enabled server is running at https://localhost:${port}`
  )
})
