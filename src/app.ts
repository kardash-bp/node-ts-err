import express, { NextFunction, Express, Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import notFound from './middleware/notFound'
import { errorHandler } from './middleware/errorHandler'
import router from './routes/router'
const app: Express = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors({ origin: 'http://localhost:3000' }))
// compresses all the responses
app.use(compression())
app.get('/', (req: Request, res: Response) => {
  // throw new Error('Test Error')
  res.send('Express + TypeScript Server')
})
app.use('/', router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Error encountered:', err.message || err)

  next(err)
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res)
})
app.use(notFound)
//app.use(errorHandler)
export default app
