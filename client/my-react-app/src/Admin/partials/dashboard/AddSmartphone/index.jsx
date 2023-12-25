import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import { BASE_URL } from "../../../../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddSmartphone() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [SmartPhone, setSmartPhone] = useState({
    name: "",
    price: "",
    type: "",
    processor: "",
    operating_system: "",
    memory: "",
    image: ""
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(`${BASE_URL}/smartPhone/addSmartphone`, SmartPhone);
  
      toast.success("SmartPhone added !!");
      // navigate("/");
    } catch (error) {
      console.error("Error adding in SmartPhone", error);
      toast.error("Error adding in SmartPhone !!");
    }
  };

  const handleChange = (e) => {
    setSmartPhone({
        ...SmartPhone,
        [e.target.name]: e.target.value
    });
};

  return (
    <div className="flex h-screen overflow-hidden">
      {" "}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />{" "}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <main>
          {" "}
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />{" "}
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            <div className="container p-6 mx-auto overflow-x-auto font-mono">
              {" "}
              <h1 className="mb-4 text-2xl font-bold text-center">
                Add SmartPhone
              </h1>
              <div className="max-w-3xl px-4 py-8 mt-6 mb-6 mx-auto rounded-lg shadow-xl border-[2px] border-black">
                <form className="flex flex-col">
                  <div className="border-[2px] border-black/20 p-4 rounded-md">
                    <div>
                      <div className="gap-4 mb-4 rounded-lg">
                        {" "}
                        <div className="grid grid-cols-2 gap-4">
                          {" "}
                          <label className="relative block mb-2 font-semibold">
                            {" "}
                            Name
                            <input
                              required
                              type="text"
                              name="name"
                              value={SmartPhone.name}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />{" "}
                          </label>{" "}
                          <label className="relative block mb-2 font-semibold">
                            {" "}
                            Price
                            <input
                              required
                              type="number"
                              name="price"
                              value={SmartPhone.price}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />{" "}
                          </label>{" "}
                          <label className="relative block mb-2 font-semibold">
                            {" "}
                            Type
                            <input
                              required
                              type="text"
                              name="type"
                              value={SmartPhone.type}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />{" "}
                          </label>{" "}
                          <label className="relative block mb-2 font-semibold">
                            {" "}
                            Processor
                            <input
                              required
                              type="text"
                              name="processor"
                              value={SmartPhone.processor}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />{" "}
                          </label>{" "}
                        </div>{" "}
                        <div className="grid grid-cols-2 gap-4">
                          {" "}
                          <label className="relative block mb-2 font-semibold">
                            {" "}
                            Operating System
                            <input
                              required
                              type="text"
                              name="operating_system"
                              value={SmartPhone.operating_system}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />{" "}
                          </label>{" "}
                          <label className="relative block mb-2 font-semibold">
                            {" "}
                            Memory
                            <input
                              required
                              type="number"
                              name="memory"
                              value={SmartPhone.memory}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />{" "}
                          </label>{" "}
                          <label className="relative block col-span-2 mb-2 font-semibold">
                            {" "}
                            Image
                            <input
                              required
                              type="text"
                              name="image"
                              value={SmartPhone.image}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                            />{" "}
                          </label>{" "}
                        </div>{" "}
                      </div>
                    </div>
                  </div>

                  <button
                    className="px-4 py-2 mx-6 mt-8 font-semibold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
