import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <nav className="w-full py-6 px-16 flex items-center justify-between tab:px-7">
      <b className="text-3xl">ARTEM GLEBOV</b>
      <div
        className={
          show
            ? "fixed left-0 top-0 w-full h-full bg-[#fff] ease-in-out duration-500 flex justify-center"
            : "fixed left-[-100%]"
        }
      >
        <div className="hidden tab:flex tab:flex-col tab:items-center tab:text-5xl tab:gap-10 tab:justify-center">
          <NavLink to="/" onClick={closeModal}>Home</NavLink>
          <NavLink to="/project" onClick={closeModal}>Project</NavLink>
          <NavLink to="/about" onClick={closeModal}>About</NavLink>
          <NavLink to="/contact" onClick={closeModal}>Contact</NavLink>
        </div>
      </div>
      <div className="hidden tab:block tab:z-50">
        {show ? (
          <IoClose size={40} className="cursor-pointer text-[#0A0A0A]" onClick={closeModal} />
        ) : (
          <IoMenu size={40} className="cursor-pointer" onClick={openModal} />
        )}
      </div>
      <div className="flex gap-8 tab:hidden">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Header;
