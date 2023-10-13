import React, { useEffect, useState } from "react";
// import {
//     faEdit
//   } from "@fortawesome/free-solid-svg-icons";
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
import axios from "axios"

function Home() {


    const [forms, setForms] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {

        if (token) {
          const headers = {
            'auth': token
          };
    
          // Fetch data from the API with the token in the headers
          axios.get(`${BASE_URL}/services/employer/forms`, { headers })
            .then((response) => {
              setForms(response.data);
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }
      }, []); 
  return (
    <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            <h1 className="mb-4 text-xl text-center font-bold">Student Details</h1>
            
            {/* Table */}
            <div className="overflow-hidden border rounded-lg shadow-2xl">
              <table className="min-w-full py-3 divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="w-1/6 px-6 py-4 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                      S.No
                    </th>
                    <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                      Student Name
                    </th>
                    <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                      Class
                    </th>
                    <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                      Curr Atte.
                    </th>
                    <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                      Total Atte.
                    </th>
                    <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b cursor-pointer text-md">
                      Atte. Percentage
                    </th>
                    <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-right text-gray-900 uppercase border-b cursor-pointer text-md">
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* {forms
                    .slice(
                      (currentPage - 1) * formsPerPage,
                      currentPage * formsPerPage
                    ) */}
                    {/* .map((form) => (
                      <tr key={form._id}> */}
                        <td
                          className="w-1/6 px-4 py-2 font-medium border-b cursor-pointer whitespace-nowrap"
                        //   onClick={() => viewDetails(form._id)}
                        >
                          {/* {form.company} */}
                        </td>
                        <td className="w-1/6 px-4 py-2 font-medium border-b whitespace-nowrap">
                          {/* {form.cwork} */}
                        </td>
                        <td className="w-1/6 px-4 py-2 font-medium border-b whitespace-nowrap">
                          {/* {form.jobpost} */}
                        </td>
                        <td className="w-1/6 px-4 py-2 font-medium border-b whitespace-nowrap">
                          {/* {form.companyprofile} */}
                        </td>
                        <td className="w-1/6 px-4 py-2 font-medium border-b whitespace-nowrap">
                          {/* {form.country} */}
                        </td>
                        <td className="w-1/6 px-4 py-2 font-medium border-b whitespace-nowrap">
                          {/* {formatReceivedAt(form.createdAt)} */}
                        </td>
                        <td className="w-1/12 px-4 py-2 font-medium border-b whitespace-nowrap text-center">
                          <button
                            className="text-blue-500 hover:text-blue-700"
                            // onClick={() => viewDetails(form._id)}
                          >
                            {/* <FontAwesomeIcon icon={faEdit} /> */}
                          </button>
                        </td>
                        <td className="w-1/12 px-4 py-2 font-medium border-b whitespace-nowrap text-center">
                          <button
                            className="text-red-500 hover:text-red-700"
                            // onClick={() => deleteEmployerDetail(form._id)}
                          >
                            {/* <FontAwesomeIcon icon={faTrash} /> */}
                          </button>
                        </td>
                      {/* </tr> */}
                    {/* ))} */}
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
  )
}

export default Home