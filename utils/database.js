import mongoose from 'mongoose'

const isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('database is already connected!')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'blog',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.log(error)
  }
}
