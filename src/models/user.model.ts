import Mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const schema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tweets: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'tweet',
      },
    ],
  },
  {
    timestamps: true,
  }
)

schema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10)
})

const model = Mongoose.models.users || Mongoose.model('user', schema)

export default model
