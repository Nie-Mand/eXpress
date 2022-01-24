import Mongoose from 'mongoose'

const schema = new Mongoose.Schema(
  {
    user: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    content: {
      type: String,
      required: true,
      maxlength: 140,
    },
  },
  {
    timestamps: true,
  }
)

const model = Mongoose.models.tweets || Mongoose.model('tweet', schema)

export default model
