import type { Middleware } from '../@types'
import jwt from 'jsonwebtoken'

export const authentify = () => async (req: any, res: any, next: any) => {
  try {
    const payload = (await jwt.verify(
      req.headers.authorization?.split(' ')[1] || '',
      process.env.SECRET || ''
    )) as any
    if (!payload) return res.status(401).send('Unauthorized')

    req.user = payload.user

    next()
  } catch {
    return res.status(401).send('Unauthorized')
  }
}
