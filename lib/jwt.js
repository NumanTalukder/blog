import { encode, decode } from 'next-auth/jwt'

export function signJwtToken(payload, options = {}) {
  const secret = process.env.NEXTAUTH_SECRET
  const token = encode(payload, secret, options)

  return token
}

export async function verifyJwtToken(sessionToken) {
  try {
    const decoded = decode({
      token: sessionToken,
      secret: process.env.NEXTAUTH_SECRET,
    })
    return decoded
  } catch (error) {
    console.log(error)
    return
  }
}
