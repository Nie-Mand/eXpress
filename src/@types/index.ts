import type { Request, Response, NextFunction } from 'express'

export type Controller = (req: any, res: Response) => Promise<void>

export type Middleware = (
  role?: string
) => (req: Request, res: Response, next: NextFunction) => void
