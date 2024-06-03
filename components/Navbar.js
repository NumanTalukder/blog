import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Code<span className="text-red-500">Pro</span>
        </Link>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="p-2 rounded" />
          <select className="p-2 rounded bg-gray-700">
            <option>NextJS</option>
            <option>React</option>
            <option>Style</option>
            <option>Blog</option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
