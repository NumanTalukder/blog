import User from '@/model/user'
import { connectToDB } from '@/utils/database'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json()
    console.log(`from backend ${name}, ${email}, ${password}`)

    // const user = await User.findOne({ email })
    // console.log(user)

    // if (user) {
    //   console.log('this email is taken')
    //   return NextResponse.json({ message: 'this email is taken!' })
    // }

    const hashedPass = await bcrypt.hash(password, 10)

    await connectToDB
    User.create({ name, email, password: hashedPass })

    return NextResponse.json({ message: 'User Registered' }, { status: 201 })
  } catch (error) {
    console.log('Backend register ', error)
    return NextResponse.json(
      { message: 'Error registering user!' },
      { status: 500 }
    )
  }
}
