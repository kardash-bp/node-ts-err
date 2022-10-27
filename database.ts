import mongoose from 'mongoose'

const url = process.env.MONGO!

class Database {
  constructor() {
    this.connect()
  }

  async connect() {
    const conn = await mongoose.connect(url)
    if (!conn) {
      throw new Error('Database connection error!')
    }
    console.log(`Database connection successful`)
  }
}
export default new Database()
