import db from '@/lib/db'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    await db.connect()

    const { name, email, password } = await req.json()
    console.log(`from backend ${name}, ${email}, ${password}`)

    const isExisting = await User.findOne({ email })
    // console.log(user)

    if (isExisting) {
      console.log('this email is taken')
      return NextResponse.json({ message: 'this email is taken!' })
    }

    const hashedPass = await bcrypt.hash(password, 10)

    const newUser = await User.create({ name, email, password: hashedPass })

    // const { password, ...user } = newUser._doc

    return NextResponse.json({ message: 'User Registered' }, { status: 201 })
  } catch (error) {
    console.log('Backend register ', error)
    return NextResponse.json(
      { message: 'Error registering user!' },
      { status: 500 }
    )
  }
}
