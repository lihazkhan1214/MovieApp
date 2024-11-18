"use client";
import Link from "next/link";
import { IoSearchOutline, IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";

import DropDown from "./DropDown";

import SideBar from "./SideBar";
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<string>("");


  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
      setActivePage("Home");
    } else if (currentPath.includes("/trending")) {
      setActivePage("Trending");
    } else if (currentPath.includes("/about")) {
      setActivePage("About");
    } else if (currentPath.includes("/contact")) {
      setActivePage("Contact");
    }
  }, []);

  const handleLinkClick = (page: string) => {
    setTimeout(() => {
      setActivePage(page);
    }, 300);
  };

  return (
    <div className="bg-[#052e16]  w-full sticky top-0 z-40 ">
      <header className="flex flex-row justify-between  items-center w-full py-4 px-5 md:px-10 max-w-screen-2xl mx-auto">
        <div className="flex flex-row items-center">
          
          <div className="block lg:hidden ">
            <SideBar/>

          </div>
          <Link href="/">
            <p className="uppercase ml-3 text-teal-300 text-3xl mx-2 md:mx-8 font-robotoSlab hover:cursor-pointer">
              Moviestan
            </p>
          </Link>

          {/* main nav hidden on small screens */}
          <ul className=" hidden lg:flex flex-row gap-10 text-white hover:cursor-pointer">
            <li
              className={` font-robotoSlab lg:text-lg  ${
                activePage === "Home"
                  ? "text-yellow-300"
                  : "hover:text-teal-300"
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`font-robotoSlab lg:text-lg  ${
                activePage === "Trending"
                  ? "text-yellow-300"
                  : "hover:text-teal-300"
              }`}
              onClick={() => handleLinkClick("Trending")}
            >
              <Link href="/trending">Trending</Link>
            </li>
            <li
              className={`font-robotoSlab lg:text-lg  ${
                activePage === "About"
                  ? "text-yellow-300"
                  : "hover:text-teal-300"
              }`}
              onClick={() => handleLinkClick("About")}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`font-robotoSlab lg:text-lg  ${
                activePage === "Contact"
                  ? "text-yellow-300"
                  : "hover:text-teal-300"
              }`}
              onClick={() => handleLinkClick("Contact")}
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-row items-center gap-2">
          <div className="bg-gray-400 opacity-80 rounded-full p-2">
            <IoSearchOutline className="text-xl text-teal-100" />
          </div>
          
          <div className="relative ml-2 mr-3 bg-transparent hidden lg:block ">

          <DropDown/>
          </div>
        
          <Link href="/login">
            <button className=" font-robotoSlab{` hidden lg:block text-black font-semibold bg-yellow-300 py-2 px-4 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </header>

        </div>
  );
}

export default NavBar;
