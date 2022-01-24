import { Router } from 'express'
import * as users from '../controllers/users.controller'

const router = Router()

router.get('/', users.getAll)
router.get('/:id', users.getById)
router.post('/', users.create)
router.put('/:id', users.update)
router.delete('/:id', users.kill)

export default router
