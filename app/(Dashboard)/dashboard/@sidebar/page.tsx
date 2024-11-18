"use client";
import Link from "next/link";
import { AnyARecord } from "node:dns";
import React, { useState } from "react";
import { FaImages,  } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";


const navigationLinks = [
  {
    title: "Dashboard",
    url: "/dashboard/",
    icon: <MdDashboard />,
  },
  {
    title: "Movies",
    url: "/dashboard",
    icon: <FaImages />,
  },
  // {
  //   title: "Logo",
  //   url: "/dashboard/logo",
  //   icon: <FaFire />,
  // },
  // {
  //   title: "Contact Us Details",
  //   url: "/dashboard/contacts",
  //   icon: <IoIosContacts />,
  // },
  // {
  //   title: "Add Menu",
  //   url: "/dashboard/menus",
  //   icon: <FaConciergeBell />,
  // },
  // {
  //   title: "Footer",
  //   url: "/dashboard/footer",
  //   icon: <FaCircleInfo />,
  // },
];

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navigationLinks[0].url); 

  const handleLinkClick = (url:any) => {
    setActiveLink(url);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin";
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <button
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center justify-end z-50 fixed right-2  bg-slate-300 p-2 mt-3 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6 items-center"
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
        className={`fixed top-0 left-0 z-50 w-64 xs:w-72 h-full min-h-screen bg-[#ebedef] transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64 md:overflow-hidden `}
        aria-label="Sidebar"
      >
        <div className="flex flex-col items-center py-6">
          {/* <img
            className="w-36 h-32 rounded-full"
            src="/logo.png"
            alt="Profile"
          /> */}
          <h2 className="mt-4 text-lg font-semibold text-gray-700">
            Movie Rating Web
          </h2>
          <p className="text-sm text-gray-500 d">
            admin@movierating.com
          </p>
        </div>

        <div className="h-full px-3 py-4 overflow-y-auto">
          <button
            className="absolute top-0 right-0 p-2 text-black font-bold m-4 border border-black md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            X
          </button>
          <ul className="space-y-3 font-medium mt-4">
            <div className="w-full h-1 bg-green-500 shadow-lg mt-4"></div>

            {navigationLinks.map((item) => {
              const isActive = activeLink === item.url; 
              return (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className={`flex items-center p-2 rounded-lg group hover:shadow-xl ${
                      isActive
                        ? " text-green-700 "
                        : "text-gray-600 hover:text-black hover:bg-white/[0.5]"
                    }`}
                    onClick={() => handleLinkClick(item.url)} 
                  >
                    <span className={`text-xl ${isActive ? "" : ""}`}>
                      {item.icon}
                    </span>
                    <span className={`ms-3 text-lg ${isActive ? "" : ""}`}>
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}

            {/* <div className="w-full h-1 bg-blue-500 shadow-lg mt-6 bottom-0"></div> */}
          </ul>
          <div className="mb-2 sm:mb-4 md:mb-3 mt-2"></div>
          <button
            onClick={logout}
            className="fixed bottom-5 w-56 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mt-6"
          >
            Log Out
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
