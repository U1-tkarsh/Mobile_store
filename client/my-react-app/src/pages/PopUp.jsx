import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { BASE_URL } from "../config";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function PopUp({ Popup, open, setOpen }) {
  const [confirm, setConfirm] = useState({
    price: "",
    modalName: "",
    email: "",
  });

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      const userData = JSON.parse(atob(userToken.split(".")[1])); 
      const userEmail = userData?.data?.email;
      setConfirm((prevConfirm) => ({ ...prevConfirm, email: userEmail }));
      // console.log(confirm, "setConfirm");
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("deliver", JSON.stringify(confirm));
  }, [confirm]);

  const handleState = (Price, name) => {
    setConfirm((prevConfirm) => ({
      ...prevConfirm,
      price: Price,
      modalName: name,
    }));
    // console.log(confirm, "setConfirm");
  };

  const handleConfirm = async () => {
    
    try {
      const response = await axios.post(
        `${BASE_URL}/confirmed/addConfirmation`,
        confirm
      );
      console.log("Payment successful", response.data);
      toast.success("Payment Successful !!");
    } catch (error) {
      console.error("Error in Payment", error);
      toast.error("Payment Failed !!");
    }
  };

  return (
    <div>
      {open &&
        Popup.map((data, id) => (
          <div className="fixed   top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
            <div
              key={id}
              className="bg-white p-4 max-h-[80vh] max-w-[80vw] overflow-y-auto"
            >
              <div className="flex relative flex-wrap justify-center">
                <img
                  src={data.image}
                  alt=""
                  className="w-29 h-40 object-cover"
                />

                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {data.name}
                  </h5>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-green-400 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-3">
                      4.3
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {data.price} ₹
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto border rounded-lg shadow-2xl">
                  <table className="min-w-full py-3 divide-y divide-gray-200 table-fixed">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                          Type
                        </th>
                        <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                          Processor
                        </th>
                        <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                          Memory
                        </th>
                        <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-left text-gray-900 uppercase border-b text-md">
                          Operating
                        </th>

                        <th className="w-1/6 px-6 py-3 font-bold tracking-wider text-right text-gray-900 uppercase border-b cursor-pointer text-md">
                          {/* <FontAwesomeIcon icon={faEdit} /> */}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="w-1/6 text-center px-4 py-2 font-medium border-b cursor-pointer whitespace-nowrap">
                          {data.type}
                        </td>
                        <td className="w-1/6 px-4 py-2 text-center font-medium border-b whitespace-nowrap">
                          {data.memory}
                        </td>
                        <td className="w-1/6 px-4 py-2 text-center font-medium border-b whitespace-nowrap">
                          {data.processor}
                        </td>
                        <td className="w-1/6 px-4 py-2 text-center font-medium border-b whitespace-nowrap">
                          {data.operating_system}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button
                  className="absolute right-0"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  handleConfirm(), handleState(data.price, data.name);
                }}
              >
                <Button className="bg-blue-300 mt-6 ">Confirm Order</Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
