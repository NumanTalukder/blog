import Link from "next/link"

const heightClasses = ["h-80", "h-96", "h-[26rem]"]

const getRandomHeightClass = () => {
  // return heightClasses[Math.floor(Math.random() * heightClasses.length)]
}

const Card = ({ title, desc, img, slug }) => {
  // const heightClass = getRandomHeightClass()

  const truncatedDesc =
    desc.split(" ").slice(0, 40).join(" ") +
    (desc.split(" ").length > 40 ? "..." : "")

  return (
    <Link
      href={`/post`}
      className={`bg-white shadow-md rounded-lg overflow-hidden mb-2 block`}
    >
      {img && (
        <img src={img} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="my-2 text-gray-600">{truncatedDesc}</p>
      </div>
    </Link>
  )
}

export default Card
