'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Button from '@mui/material/Button'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { ArrowForward } from '@mui/icons-material'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Both fields are required!')
    }

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      console.log(res)

      if (res?.error === null) {
        toast.success('Singed in Successfully')
        window.location.href = '/'
      } else {
        toast.error('Wrong credentials!')
        console.log(res.error)
        return
      }
    } catch (error) {
      toast.error('Error Signing in!')
      console.log(error)
    }
  }

  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col gap-4 login-container w-96'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Sign In</h1>
          <Link href='/register' className='text-gray-600'>
            Sign Up <ArrowForward />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
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

          <button
            // variant='contained'
            className='w-full text-white rounded-3xl bg-violet-500 mt-4 px-4 py-2'
          >
            Sign In
          </button>
        </form>
      </div>
      <Toaster />
    </main>
  )
}

export default Login
