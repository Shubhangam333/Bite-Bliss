import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import { LuSearch, LuUser2 } from "react-icons/lu";

type NavItems = {
  label: string;
  link: string;
};

const navItems: NavItems[] = [
  {
    label: "Recipe",
    link: "recipe",
  },
  {
    label: "About Us",
    link: "about",
  },
  {
    label: "Contact",
    link: "contact",
  },
];

const Navbar: React.FC = () => {
  return (
    <header className="md:px-12 px-4 bg-white h-12 flex items-center fixed top-0 right-0 left-0 max-w-7xl z-[90000]">
      <nav className="flex justify-between items-center h-full w-full">
        <h2 className="text-2xl font-light text-primary cursor-pointer whitespace-nowrap">
          Bite Bliss
        </h2>
        <ul className=" gap-4 h-full items-center whitespace-nowrap hidden md:flex">
          {navItems.map((d, i) => (
            <li
              key={i}
              className="hover:text-[#656C7B] text-[#373743] h-full flex items-center"
            >
              <Link href={d.link} className="h-full flex items-center navItem ">
                {d.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-6">
          <li>
            <LuSearch className="text-primary text-xl cursor-pointer" />
          </li>
          <li>
            <HiOutlineShoppingBag className="text-primary text-xl cursor-pointer" />
          </li>
          <li>
            <Link href="/auth">
              <LuUser2 className="text-primary text-xl cursor-pointer" />
            </Link>
          </li>
          <li className="md:hidden">
            <button className="outline-none text-primary text-2xl cursor-pointer flex items-center">
              <IoIosMenu className="" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
