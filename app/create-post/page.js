'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  console.log(session?.user?.accessToken)

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // const res = await fetch('/api/post', {
      //   method: 'POST',
      //   headers: {
      //     Authorization: `Bearer ${session?.user?.accessToken}`,
      //   },
      //   body: JSON.stringify({
      //     title,
      //     category,
      //     description,
      //     author: session?.user.id,
      //   }),
      // })

      const res = await axios.post(
        '/api/post',
        {
          title,
          category,
          description,
          author: session?.user?._id,
        },
        {
          headers: { Authorization: `Bearer ${session?.user?.accessToken}` },
        }
      )

      if (res.ok) {
        router.push('/')
        console.log('saved')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (session?.user?.accessToken) {
      router.push('/login')
    }
  }, [])

  return (
    <div className='px-40 my-10 h-screen'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center gap-4'
      >
        <input
          type='text'
          placeholder='Title'
          className='w-full px-4 py-3 border rounded-md'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Category'
          className='w-full px-4 py-3 border rounded-md'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          placeholder='description'
          className='w-full min-h-[200px] px-4 py-3 border rounded-md'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='w-full font-semibold text-white tracking-wider bg-violet-500 hover:bg-violet-700 px-4 py-2 rounded-md'>
          Save
        </button>
      </form>
    </div>
  )
}

export default page
