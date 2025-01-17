import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { CiMenuFries } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", path: "./home" },
    { id: 2, name: "Blogs", path: "./blogs" },
    { id: 3, name: "Portfolio", path: "./portfolio" },
    { id: 4, name: "About", path: "./about" },
  ];
  return (
    <nav className="p-3 bg-zinc-400">
      <div className="container mx-auto">
        <span onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <IoMdCloseCircleOutline className="text-2xl" />
          ) : (
            <CiMenuFries className="text-2xl" />
          )}
        </span>

        <ul
          className={`md:flex gap-8 duration-1000 border md:border-none p-5 md:p-0 bg-slate-100 md:bg-transparent justify-center md:static absolute
            ${open ? "top-12" : "-top-44"}
            `}
        >
          {navLinks.map((link) => (
            <NavLink key={link.id} link={link}></NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
