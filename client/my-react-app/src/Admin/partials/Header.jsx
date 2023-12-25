import React, { useEffect, useState } from "react";

import SidebarLinkGroup from "./SidebarLinkGroup";
import { useLocation, NavLink } from "react-router-dom";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token.length > 0 && token !== undefined) {
      setUserData(token);
    }
  }, []);

  const { pathname } = location;

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  return (
    <header
      className={`sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30 sm:flex sm:items-center sm:justify-between`}
    >
      <div className="relative ">
        <div className="flex items-center justify-between h-16 -mb-px ">
          {/* Header: Left side */}
          <div className="flex px-4 sm:px-6 lg:px-8">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden sm:mr-2"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {sidebarOpen && (
            <div className="absolute top-0 w-1/2 min-h-screen px-4 pt-6 bg-slate-900 sm:px-6 lg:px-8">
              <button
                className="text-slate-500 hover:text-slate-600 lg:hidden sm:mr-2"
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  setSidebarOpen(!sidebarOpen);
                }}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="5" width="16" height="2" />
                  <rect x="4" y="11" width="16" height="2" />
                  <rect x="4" y="17" width="16" height="2" />
                </svg>
              </button>
              {/* Links */}
              <div className="space-y-8">
                {/* Pages group */}
                <div className="">
                  <ul className="mt-3">
                    {/* Dashboard */}

                    {/* E-Commerce */}
                    <SidebarLinkGroup
                      activecondition={pathname.includes("ecommerce")}
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <a
                              href="#0"
                              className={`block text-slate-200 truncate transition duration-150 ${
                                pathname.includes("ecommerce")
                                  ? "hover:text-slate-200"
                                  : "hover:text-white"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <svg
                                    className="w-6 h-6 shrink-0"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      className={`fill-current ${
                                        pathname.includes("ecommerce")
                                          ? "text-indigo-300"
                                          : "text-slate-400"
                                      }`}
                                      d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                                    />
                                    <path
                                      className={`fill-current ${
                                        pathname.includes("ecommerce")
                                          ? "text-indigo-600"
                                          : "text-slate-700"
                                      }`}
                                      d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                                    />
                                    <path
                                      className={`fill-current ${
                                        pathname.includes("ecommerce")
                                          ? "text-indigo-500"
                                          : "text-slate-600"
                                      }`}
                                      d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                                    />
                                  </svg>
                                  <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                    Users
                                  </span>
                                </div>
                                {/* Icon */}
                                <div className="flex ml-2 shrink-0">
                                  <svg
                                    className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                      open && "rotate-180"
                                    }`}
                                    viewBox="0 0 12 12"
                                  >
                                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                  </svg>
                                </div>
                              </div>
                            </a>
                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                              <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                                <li className="mb-1 last:mb-0">
                                  <NavLink
                                    end
                                    to="/dashboard/users"
                                    className={({ isActive }) =>
                                      "block transition duration-150 truncate " +
                                      (isActive
                                        ? "text-indigo-500"
                                        : "text-slate-400 hover:text-slate-200")
                                    }
                                  >
                                    <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                      Users
                                    </span>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                    <SidebarLinkGroup
                      activecondition={pathname.includes("ecommerce")}
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <a
                              href="#0"
                              className={`block text-slate-200 truncate transition duration-150 ${
                                pathname.includes("ecommerce")
                                  ? "hover:text-slate-200"
                                  : "hover:text-white"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <svg
                                    className="w-6 h-6 shrink-0"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      className={`fill-current ${
                                        pathname.includes("ecommerce")
                                          ? "text-indigo-600"
                                          : "text-slate-700"
                                      }`}
                                      d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                                    />
                                    <path
                                      className={`fill-current ${
                                        pathname.includes("ecommerce")
                                          ? "text-indigo-500"
                                          : "text-slate-600"
                                      }`}
                                      d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                                    />
                                  </svg>
                                  <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                    Add SmartPhone
                                  </span>
                                </div>
                                {/* Icon */}
                                <div className="flex ml-2 shrink-0">
                                  <svg
                                    className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                      open && "rotate-180"
                                    }`}
                                    viewBox="0 0 12 12"
                                  >
                                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                  </svg>
                                </div>
                              </div>
                            </a>
                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                              <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                                <li className="mb-1 last:mb-0">
                                  <NavLink
                                    end
                                    to="/dashboard/addSmartphone"
                                    className={({ isActive }) =>
                                      "block transition duration-150 truncate " +
                                      (isActive
                                        ? "text-indigo-500"
                                        : "text-slate-400 hover:text-slate-200")
                                    }
                                  >
                                    <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                      Add SmartPhone
                                    </span>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                    <SidebarLinkGroup
                      activecondition={pathname.includes("ecommerce")}
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <a
                              href="#0"
                              className={`block text-slate-200 truncate transition duration-150 ${
                                pathname.includes("ecommerce")
                                  ? "hover:text-slate-200"
                                  : "hover:text-white"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <svg
                                    className="w-6 h-6 shrink-0"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      className={`fill-current ${
                                        pathname.includes("ecommerce")
                                          ? "text-indigo-600"
                                          : "text-slate-700"
                                      }`}
                                      d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                                    />
                                    <path
                                      className={`fill-current ${
                                        pathname.includes("ecommerce")
                                          ? "text-indigo-500"
                                          : "text-slate-600"
                                      }`}
                                      d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                                    />
                                  </svg>
                                  <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                    Deliver Order
                                  </span>
                                </div>
                                {/* Icon */}
                                <div className="flex ml-2 shrink-0">
                                  <svg
                                    className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                      open && "rotate-180"
                                    }`}
                                    viewBox="0 0 12 12"
                                  >
                                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                  </svg>
                                </div>
                              </div>
                            </a>
                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                              <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                                <li className="mb-1 last:mb-0">
                                  <NavLink
                                    end
                                    to="/dashboard/confirmedOrder"
                                    className={({ isActive }) =>
                                      "block transition duration-150 truncate " +
                                      (isActive
                                        ? "text-indigo-500"
                                        : "text-slate-400 hover:text-slate-200")
                                    }
                                  >
                                    <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                      Deliver Order
                                    </span>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
