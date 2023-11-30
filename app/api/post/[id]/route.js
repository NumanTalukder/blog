import db from '@/lib/db'
import { verifyJwtToken } from '@/lib/jwt'
import Post from '@/models/Post'

// get a single post by id
export const GET = async (req, { params }) => {
  await db.connect()
  try {
    const posts = await Post.findById(params.id)
    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    console.log(error)
  }
}

// update a single post by id
export const PATCH = async (req, { params }) => {
  await db.connect()

  const accessToken = req.headers.get('authorization')
  const token = accessToken.split(' ')[1]
  const decodedToken = verifyJwtToken(token)

  if (!accessToken || !decodedToken) {
    return new Response(JSON.stringify({ error: 'unauthorized token' }), {
      status: 403,
    })
  }

  try {
    const post = Post.findOneAndUpdate(params.id)
    return new Response(JSON.stringify(post), { status: 200 })
  } catch (error) {
    console.log(error)
  }
}

// delete a single post by id
export const DELETE = async (req, { params }) => {
  await db.connect()

  const accessToken = req.headers.get('authorization')
  const token = accessToken.split(' ')[1]
  const decodedToken = verifyJwtToken(token)

  if (!accessToken || !decodedToken) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 403,
    })
  }

  try {
    const post = Post.findOneAndDelete(params.id)
    return new Response(JSON.stringify(post), { status: 200 })
  } catch (error) {
    console.log(error)
  }
}
