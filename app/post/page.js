import Image from 'next/image'

const Post = () => {
  const blog = {
    title: 'Will the AI take over the world?',
    desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
    img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg',
    creator: 'Numan',
    creationDate: '2-oct-2023',
    category: 'AI',
  }

  return (
    <main className='bg-blue-50/75 md:px-20 md:py-6'>
      <section className='bg-white flex flex-col items-center justify-center w-full md:max-w-6xl mx-auto md:mt-5 md:rounded-3xl md:shadow-md'>
        <Image
          src={blog.img}
          width={500}
          height={500}
          style={{ minWidth: '100%', height: 'auto' }}
          className='md:rounded-t-3xl'
        />
        <div className='px-6'>
          <h1 className='text-4xl text-center font-bold my-2 mx-auto'>
            {blog.title}
          </h1>
          <div className='flex items-center justify-between my-2'>
            <p className='text-gray-500'>Category: {blog.category}</p>
            <p className='text-gray-500 border rounded-2xl p-1'>
              Author: {blog.creator}
            </p>
            <p className='text-gray-500'>Date: {blog.creationDate}</p>
          </div>
          <p className='text-justify'>{blog.desc}</p>
        </div>
      </section>
    </main>
  )
}

export default Post
