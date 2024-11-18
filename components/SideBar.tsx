"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import DropDown from "./DropDown";

const navigationLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Trending",
    url: "/trending",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subSidebarOpen, setSubSidebarOpen] = useState(false);

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

  // const sidebarRef = useRef();
  // const subSidebarRef = useRef();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setSubSidebarOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={() => toggleSidebar()}
        className={`inline-flex items-center  p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg  hover:border-black hover:border `}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 xs:w-72  overflow-x-hidden overflow-y-auto bg-white  text-black  h-screen transition-transform -translate-x-full
          
          ${sidebarOpen ? "translate-x-0" : ""}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <button
            className="absolute top-0 right-0 p-2  font-bold m-2  "
            onClick={() => setSidebarOpen(false)}
          >
            <ImCross size={20} />
          </button>
          <ul className="space-y-3 font-medium mt-16 mb-6">
            {navigationLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={`${item.url}`}
                  className={`flex items-center p-2  rounded-lg  hover:bg-gray-100 group ${
                    activePage === "Home" ? "text-black" : "hover:text-teal-300"
                  }`}
                  onClick={() => setSubSidebarOpen(!subSidebarOpen)}
                >
                  <span className="ms-3 text-xl font-bold">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <li className="bg-yellow-300 text-black list-none w-20 mx-4 rounded-lg py-2 mb-2 px-4">
            <Link href="/login">Login</Link>
          </li>
          <li className="list-none mx-4 mt-2">
            <DropDown />
          </li>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
