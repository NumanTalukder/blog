import Image from 'next/image'

export default function Home() {
  const blogs = [
    {
      title: 'Will the AI take over the world?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg',
      creator: 'Numan',
      creationDate: '2-oct-2023',
      category: 'AI',
    },
    {
      title: 'Will the AI take over the world?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg',
      creator: 'Numan',
      creationDate: '2-oct-2023',
      category: 'AI',
    },
    {
      title: 'Will the AI take over the world?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      img: 'https://photoscissors.com/images/samples/1-before.jpg',
      creator: 'Numan',
      creationDate: '2-oct-2023',
      category: 'AI',
    },
    {
      title: 'Will the AI take over the world?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      img: 'https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg',
      creator: 'Numan',
      creationDate: '2-oct-2023',
      category: 'AI',
    },
    {
      title: 'Will the AI take over the world?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg',
      creator: 'Numan',
      creationDate: '2-oct-2023',
      category: 'AI',
    },
    {
      title: 'Will the AI take over the world?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg',
      creator: 'Numan',
      creationDate: '2-oct-2023',
      category: 'AI',
    },
    {
      title: 'Will the AI take over the world?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      img: 'https://photoscissors.com/images/samples/1-before.jpg',
      creator: 'Numan',
      creationDate: '2-oct-2023',
      category: 'AI',
    },
    {
      title: 'Will the AI take over the world?',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
      img: 'https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg',
      creator: 'Numan',
      creationDate: '2-oct-2023',
      category: 'AI',
    },
  ]
  return (
    <main className='bg-blue-50/75 px-20 py-6'>
      <div className='flex justify-between flex-wrap gap-8'>
        {blogs.map((blog) => (
          <div className='bg-white w-[320px] rounded-xl shadow-md'>
            <Image
              src={blog.img}
              width={500}
              height={500}
              style={{ minWidth: '100%', height: 'auto' }}
              className='rounded-t-xl'
            />
            <div className='px-4 py-2 h-32 overflow-hidden'>
              <h1 className='font-bold text-center'>{blog.title}</h1>
              <p className='text-justify'>{blog.desc}</p>
            </div>
            <div className='flex gap-3 mt-2 px-4'>
              <p className='text-gray-500'>{blog.category}</p>
              <p className='text-gray-500'>{blog.creator}</p>
              <p className='text-gray-500'>{blog.creationDate}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}