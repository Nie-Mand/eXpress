import Tweet from '../models/tweet.model'
import type { ObjectId } from 'mongoose'

export const getAll = async () => {
  return Tweet.find({})
}

export const getById = async (id: ObjectId) => {
  return Tweet.findById(id)
}

export const create = async (tweet: any) => {
  return Tweet.create(tweet)
}

export const update = async (id: ObjectId, tweet: any) => {
  return Tweet.findByIdAndUpdate(id, tweet, { new: true })
}

export const kill = async (id: ObjectId) => {
  return Tweet.findByIdAndDelete(id)
}

export const save = async (id: ObjectId) => {
  // return Tweet.create(user)
}
