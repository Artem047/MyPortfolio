import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="w-full py-6 px-16 flex items-center justify-between">
        <b className="text-3xl">ARTEM GLEBOV</b>
        <div className="flex gap-8">
            <Link>Home</Link>
            <Link>Work</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </div>
    </nav>
  )
}

export default Header