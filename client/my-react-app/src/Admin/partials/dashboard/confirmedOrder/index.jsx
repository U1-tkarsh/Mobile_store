import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../config";
import axios from "axios";
import Header from "../../Header";
import Sidebar from "../../Sidebar";

function index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [forms, setForms] = useState([]);
  const userToken = localStorage.getItem("deliver");

  useEffect(() => {
    if (userToken) {
      try {
        axios.get(`${BASE_URL}/confirmed/getConfirmation`).then((response) => {
          setForms(response.data);
          console.log(response.data);
        });
      } catch (error) {
        console.error("Error decoding userToken:", error);
      }
    }
  }, [userToken]);

  // console.log(forms.price, 'username');
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
                <h1 className="mb-4 text-xl text-center font-bold">
                  Remaining Delivery Details
                </h1>

                {/* Table */}
                <div className="overflow-x-auto border rounded-lg shadow-2xl">
                  <table className="min-w-full py-3 divide-y divide-gray-200 table-fixed">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="w-1/3 px-6 text-center py-4 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                          S.No
                        </th>
                        <th className="w-1/3 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                          User Name
                        </th>
                        <th className="w-1/3 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                          Email
                        </th>
                        <th className="w-1/3 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                          Price
                        </th>
                        <th className="w-1/3 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                          Product Name
                        </th>
                        <th className="w-1/3 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                          Mobile Number
                        </th>
                        <th className="w-1/3 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b text-md">
                          Address
                        </th>

                        <th className="w-1/6 px-6 text-center py-3 font-bold tracking-wider text-gray-900 uppercase border-b cursor-pointer text-md">
                          {/* <FontAwesomeIcon icon={faEdit} /> */}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Array.isArray(forms) && forms.length > 0 ? (
                        // Inside the forms.map function
                        forms.map((order, index) => (
                          <tr key={order._id}>
                            <td className="w-1/3 text-center px-4 py-2 font-medium border-b cursor-pointer whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="w-1/3 text-center px-4 py-2 font-medium border-b whitespace-nowrap">
                              {order.username}
                            </td>
                            <td className="w-1/3 text-center px-4 py-2 font-medium border-b whitespace-nowrap">
                              {order.email}
                            </td>
                            <td className="w-1/3 text-center px-4 py-2 font-medium border-b whitespace-nowrap">
                              {order.price}
                            </td>
                            <td className="w-1/3 text-center px-4 py-2 font-medium border-b whitespace-nowrap">
                              {order.modalName}
                            </td>
                            <td className="w-1/3 text-center px-4 py-2 font-medium border-b whitespace-nowrap">
                              {order.mobileNumber}
                            </td>
                            <td className="w-1/3 text-center px-4 py-2 font-medium border-b whitespace-nowrap">
                              {order.address}
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

export default index;
