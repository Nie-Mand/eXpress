import express, { type Request, Response } from 'express'
import parser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
import { connect } from './utils/connect'

export default function main() {
  const app = express()

  app.use(morgan(':method :url :status :response-time ms'))
  app.use(cors())
  app.use(parser.json())
  app.use(parser.urlencoded({ extended: true }))

  app.get('/', (req, res) =>  {
    res.send("Hello World")
  })
  // app.use(routes)

  app.listen(4000, () => {
    console.log('Server is running on port 4000')
  })

  // connect()
  //   .then(() => {
      
  //   })
  //   .catch(console.error)
}
