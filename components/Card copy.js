import Image from "next/image"
import React from "react"

// const Card = ({ blog }) => {
//   return (
//     <div className="bg-white min-w-[330px] min-h-[300px] rounded-3xl shadow-lg cursor-pointer">
//       <Image
//         src={blog.img}
//         width={500}
//         height={500}
//         // style={{ minWidth: '100%', height: '50%' }}
//         className="rounded-t-3xl"
//       />
//       <div className="p-2 py-4">
//         <div className="px-4 py-2 h-32 overflow-hidden">
//           <h1 className="font-bold text-center">{blog.title}</h1>
//           <p className="text-justify">{blog.desc}</p>
//         </div>
//         <div className="flex gap-3 mt-2 px-4">
//           <p className="text-gray-500">{blog.category}</p>-
//           <p className="text-gray-500">{blog.creator}</p>-
//           <p className="text-gray-500">{blog.creationDate}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

const truncatedDesc =
  desc.split(" ").slice(0, 20).join(" ") +
  (desc.split(" ").length > 20 ? "..." : "")

const Card = ({ title, content, image, heightClass }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden mb-6 ${heightClass}`}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{content}</p>
      </div>
    </div>
  )
}

export default Card
