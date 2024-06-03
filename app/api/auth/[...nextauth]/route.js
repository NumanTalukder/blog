import NextAuth from 'next-auth/next'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProviders from 'next-auth/providers/credentials'
import User from '@/models/User'
import { signJwtToken } from '@/lib/jwt'
import bcrypt from 'bcryptjs'
import db from '@/lib/db'

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProviders({
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials

        await db.connect()

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error('User not found!')
        }

        const comparePass = await bcrypt.compare(password, user.password)

        if (!comparePass) {
          throw new Error('Wrong Password!')
        } else {
          const { password, ...others } = user._doc

          const accessToken = signJwtToken(others, { expiresIn: '7d' })

          return {
            ...others,
            accessToken,
          }
        }
      },
    }),
  ],

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
        token._id = user._id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken
        session.user._id = token._id
      }

      return session
    },
  },
})

export { handler as GET, handler as POST }
