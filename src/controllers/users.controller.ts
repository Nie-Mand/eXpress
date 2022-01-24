import type { Controller } from '../@types'
import * as service from '../services/users.service'

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
    const body = req.body
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
