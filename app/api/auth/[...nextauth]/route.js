import User from '@/model/user'
import { connectToDB } from '@/utils/database'
import nextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials

        await connectToDB()
        const user = User.findOne({ email })

        if (!user) {
          console.log('user not found!')
          return
        }

        const matchPass = bcrypt.compare(password, user.password)

        if (!matchPass) {
          console.log('password did not match')
          return
        }

        return user
      },
    }),
  ],
}

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST }
