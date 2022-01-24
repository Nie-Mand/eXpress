import Mongoose from 'mongoose'

export const connect = async () => {
  const uri = process.env.DB_URL
  await Mongoose.connect(uri || '')
  console.log('Connected to MongoDB')
}
