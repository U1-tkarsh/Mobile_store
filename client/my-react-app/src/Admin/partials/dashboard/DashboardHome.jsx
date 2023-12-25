import React, { useEffect, useState } from "react";

// import {
//     faEdit
//   } from "@fortawesome/free-solid-svg-icons";
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const BASE_URL = 'http://localhost:5001/api';
import axios from "axios";
import Sidebar from "../Sidebar";
import Header from "../Header";

function DashboardHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [forms, setForms] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const headers = {
        auth: token,
      };

      axios
        .get(`${BASE_URL}/Users/getAllUser`, { headers })
        .then((response) => {
          setForms(response.data.user);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [token]);

  // console.log(forms.username, 'username');
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <main>
          {/* Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            {/* Dashboard actions */}
            {/* Cards */}
            <div className="grid gap-6 grid-cols-15">
              {/* Table (Top Channels) */}
              <section className="container p-6 mx-auto overflow-x-auto font-mono"></section>
    <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
      <h1 className="mb-4 text-xl text-center font-bold">New User Details</h1>

      {/* Table */}
      <div className="overflow-hidden border rounded-lg shadow-2xl">
        <table className="min-w-full py-3 divide-y divide-gray-200 table-fixed">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-1/3 px-6 text-center py-4 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                S.No
              </th>
              <th className="w-1/3 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                Student Name
              </th>
              <th className="w-1/3 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                Email
              </th>
              
              <th className="w-1/6 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b cursor-pointer text-md">
                {/* <FontAwesomeIcon icon={faEdit} /> */}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(forms) && forms.length > 0 ? (
              forms.map((user, index) => (
                <tr key={user._id}>
                  <td className="w-1/3 text-center px-4 py-2 font-medium border-b cursor-pointer whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="w-1/3 text-center px-4 py-2 font-medium border-b whitespace-nowrap">
                    {user?.username}
                  </td>
                  <td className="w-1/3 text-center px-4 py-2 font-medium border-b whitespace-nowrap">
                    {user.email}
                  </td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-between px-4 py-3 bg-gray-100 border-t border-gray-200 sm:px-6">
          <div className="flex items-center">
            <button
              className="px-3 py-1 rounded-full focus:outline-none focus:shadow-outline-purple"
              // onClick={previousPage}
              // disabled={currentPage === 1}
            >
              {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
            </button>
            {/* <span className="px-2 text-sm">{currentPage}</span> */}
            <button
              className="px-3 py-1 rounded-full focus:outline-none focus:shadow-outline-purple"
              // onClick={nextPage}
              // disabled={
              //   currentPage === Math.ceil(forms.length / formsPerPage)
              // }
            >
              {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
          </div>
        </main>
      </div>
      </div>
  );
}

export default DashboardHome;
