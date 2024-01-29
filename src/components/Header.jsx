import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="w-full py-6 px-16 flex items-center justify-between">
        <b className="text-3xl">ARTEM GLEBOV</b>
        <div className="flex gap-8">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/project'>Project</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    </nav>
  )
}

export default Header