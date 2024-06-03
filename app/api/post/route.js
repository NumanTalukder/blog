import db from "@/lib/db"
import { verifyJwtToken } from "@/lib/jwt"

export const POST = async (req) => {
  const accessToken = req.headers.get("Authorization")
  console.log(accessToken)
  const token = accessToken.split(" ")[1]
  const decodedToken = verifyJwtToken(token)

  if (!accessToken || !decodedToken) {
    return new Response(JSON.stringify({ error: "Unauthorized token!" }), {
      status: 403,
    })
  }

  await db.connect()
  try {
    const body = await req.json()
    console.log(body)
    const newPost = await Post.create(body)

    return new Response(JSON.stringify(newPost), { status: 201 })
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 })
  }
}

export const GET = async (req) => {
  await db.connect()
  try {
    const posts = await Post.find()
    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    console.log(error)
  }
}
