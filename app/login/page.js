'use client'

import { ArrowForward } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {}

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

          <Button
            variant='contained'
            className='rounded-3xl bg-violet-500 mt-4'
          >
            Sign In
          </Button>
        </form>
      </div>
    </main>
  )
}

export default Login