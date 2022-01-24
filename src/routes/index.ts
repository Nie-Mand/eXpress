import { Router } from 'express'
import tweets from './tweets.route'
import users from './users.route'
import User from '../models/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = Router()

router.use('/tweets', tweets)
router.use('/users', users)

router.post('/login', async (req, res) => {
  const body = req.body

  // user exist
  const user = await User.findOne({ email: body.email }).lean()

  if (!user) {
    return res.status(400).send('User not found')
  }

  const doesPasswordMatch = await bcrypt.compare(body.password, user.password)

  if (!doesPasswordMatch) {
    return res.status(400).send('Password does not match')
  }

  delete user.password

  const token = jwt.sign({ user }, process.env.SECRET || '', {
    expiresIn: '10h',
  })

  res.json({
    token,
  })
})

export default router
