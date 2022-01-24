import { Router } from 'express'
import * as tweets from '../controllers/tweets.controller'
import { authentify } from '../middlewares/authentify'

const router = Router()
router.get('/', authentify(), tweets.getAll)
router.get('/:id', tweets.getById)
router.post('/', authentify(), tweets.create)
router.put('/save/:id', tweets.save)
router.put('/:id', tweets.update)
router.delete('/:id', tweets.kill)

export default router
