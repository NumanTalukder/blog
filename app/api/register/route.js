import User from '@/model/user'
import { connectToDB } from '@/utils/database'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json()

    const user = User.findOne({ email }).select('_id')

    if (user) {
      console.log('this email is taken')
      return NextResponse.json({ message: 'this email is taken!' })
    }

    if (!user) {
      console.log('user not found!')
      return
    }

    const hashedPass = await bcrypt.hash(password, 10)

    await connectToDB
    User.create({ name, email, password: hashedPass })

    return NextResponse.json({ message: 'User Registered' }, { status: 201 })
  } catch (error) {
    console.log('register ', error)
    return NextResponse.json(
      { message: 'Error registering user!' },
      { status: 500 }
    )
  }
}
