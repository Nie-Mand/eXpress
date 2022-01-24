import type { Controller } from '../@types'
import * as service from '../services/tweets.service'

export const getAll: Controller = async (req, res) => {
  const data = await service.getAll()
  res.json(data)
}

export const getById: Controller = async (req, res) => {
  const id = req.params.id
  const data = await service.getById(id as any)
  res.json(data)
}

export const create: Controller = async (req, res) => {
  try {
    const { content } = req.body
    const body = {
      content,
      user: req.user._id,
    }
    const data = await service.create(body)
    res.json(data)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
}

export const update: Controller = async (req, res) => {
  const id = req.params.id
  const body = req.body
  const data = await service.update(id as any, body)
  res.json(data)
}

export const kill: Controller = async (req, res) => {
  const id = req.params.id
  const data = await service.kill(id as any)
  res.json(data)
}

export const save: Controller = async (req, res) => {
  const body = req.body
  const data = await service.save(body)
  res.json(data)
}
