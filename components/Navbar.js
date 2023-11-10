'use client'

import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const isLoggedIn = Boolean(session?.user)

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isDropDown, setIsDropDown] = useState(false)

  const categories = ['Technology', 'AI', 'Travel', 'Food', 'Vlog']

  return (
    <header className='w-full shadow-md'>
      <nav className='flex items-center justify-between px-6 py-4 md:px-20 md:py-6'>
        <h1 className='text-2xl font-bold text-violet-600'>Blog</h1>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='bg-gray-200 w-44 md:w-60 px-4 py-2 rounded-md'
        />
        <div className='flex relative items-center gap-2'>
          <AccountCircleOutlinedIcon
            className='text-3xl cursor-pointer'
            onClick={() => setIsDropDown(!isDropDown)}
          />
          {isDropDown && (
            <div className='z-50 absolute w-60 mt-40 right-0 space-y-2 py-2 bg-white border rounded-lg transition-all duration-300'>
              {isLoggedIn ? (
                <div className='flex flex-col items-start gap-3 px-4'>
                  <p className='text-black py-2 border-b'>
                    Hi {session.user.name}!
                  </p>
                  <Link href='/create-post'>Create Post</Link>
                  <Link href='/dashboard'>Dashboard</Link>
                  <Link href='/user-info'>Account Settings</Link>
                  <button
                    onClick={signOut}
                    className='text-black py-2 cursor-pointe hover:text-green-500'
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={signIn}
                    className='text-black px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500'
                  >
                    Login
                  </button>
                  <Link
                    href='/register'
                    className='text-black px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500'
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
      <div className='border-b w-full'></div>
      <div className='flex items-center justify-center gap-6 py-2'>
        {categories.map((category) => (
          <p
            key={category}
            className='text-gray-500 cursor-pointer'
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>
    </header>
  )
}

export default Navbar
