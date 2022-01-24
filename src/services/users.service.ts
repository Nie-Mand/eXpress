import User from '../models/user.model'
import type { ObjectId } from 'mongoose'

export const getAll = async () => {
  return User.find({})
}

export const getById = async (id: ObjectId) => {
  return User.findById(id)
}

export const create = async (user: any) => {
  return User.create(user)
}

export const update = async (id: ObjectId, user: any) => {
  return User.findByIdAndUpdate(id, user, { new: true })
}

export const kill = async (id: ObjectId) => {
  return User.findByIdAndDelete(id)
}
