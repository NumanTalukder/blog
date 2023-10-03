'use client'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { useState } from 'react'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = ['Technology', 'AI', 'Travel', 'Food', 'Vlog']

  return (
    <header className='w-full shadow-md'>
      <nav className='flex items-center justify-between px-6 py-4 md:px-20 md:py-6'>
        <h1 className='text-2xl font-bold text-indigo-600'>Blog</h1>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='bg-gray-200 w-44 md:w-60 px-4 py-2 rounded-md'
        />
        <div className='flex items-center gap-2'>
          <AccountCircleOutlinedIcon className='text-3xl' />
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
