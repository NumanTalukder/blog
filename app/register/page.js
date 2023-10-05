'use client'

import { ArrowForward } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { useState } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const session = await getServerSession(authOptions)

  // if (session) {
  //   redirect('/')
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (res.ok) {
        setName('')
        setEmail('')
        setPassword('')
        redirect('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <div className='login-container flex flex-col gap-4 w-96'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Register</h1>
          <Link href='login' className='text-gray-600'>
            Sign in <ArrowForward />
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-2 px-4 border border-violet-500 mt-4 rounded-3xl'
          />
          <input
            type='text'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 px-4 border border-violet-500 mt-4 rounded-3xl'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-2 px-4 border border-violet-500 mt-4 rounded-3xl'
          />

          <Button
            variant='contained'
            className='rounded-3xl bg-violet-500 mt-4'
          >
            Register
          </Button>
        </form>
      </div>
    </main>
  )
}

export default Register
