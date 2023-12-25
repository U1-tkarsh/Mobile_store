import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import { Button } from "@material-tailwind/react";
import { Filter } from "./Filter";
import axios from "axios";
import { BASE_URL } from "../config";

const Cards = ({ selectedType, cardData }) => {
  const [card, setCard] = useState([]);
  const [Popup, setPopUp] = useState('');

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        // Fetch all smart phones if no type is selected
        const response = selectedType
          ? await axios.get(
              `${BASE_URL}/smartPhone/getAllSmartphones?type=${selectedType}`
            )
          : await axios.get(`${BASE_URL}/smartPhone/getAllSmartphones`);

        setCard(response.data.smartphones);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, [selectedType]);

  const [open, setOpen] = useState(false);

  const handleOpen = async (id) => {
    const response = await axios.get(`${BASE_URL}/smartPhone/getSmartphonesById/${id}`);
    setPopUp(response.data.smartphones)
    setOpen(!open);
  };

  const filteredCards =
    (selectedType &&
      cardData &&
      cardData.length > 0 &&
      cardData.filter((card) => {
        return (
          card.type === selectedType.type ||
          card.operating_system === selectedType.operating_system ||
          card.memory === selectedType.memory ||
          card.price === selectedType.price ||
          card.name === selectedType.name ||
          card.processor === selectedType.processor
        );
      })) ||
    [];

  return (
    <div className="flex flex-col  md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center mx-auto">
        {(filteredCards.length > 0 ? filteredCards : card)?.map((data, id) => (
          <div
            key={id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="p-8 h-96 rounded-t-lg"
              src={data?.image}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {data?.name}
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
                  4.2
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {data?.price}₹
                </span>
                <Button
                  onClick={() => {
                    handleOpen(data._id);
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Purchase
                </Button>

                <PopUp Popup={Popup} open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
