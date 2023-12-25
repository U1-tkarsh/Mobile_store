import React, { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5001/api";
import axios from "axios";
import Card from "./Card";
import { Filter } from "./Filter";

function Home() {

  const [selectedType, setSelectedType] = useState(null);
  const [cardData, setCardData] = useState([]);

  const handleTypeFilter = async (type) => {
    try {

      const response = await axios.get(
        `${BASE_URL}/smartPhone/getAllSmartphones?type=${type}`
      );
      setCardData(response.data.smartphones);


      setSelectedType(type);
    } catch (error) {
      console.error("Error fetching filtered card data:", error);
    }
  };


  return (
    <div >
      <Filter onFilterChange = { handleTypeFilter }/>
      <Card selectedType={selectedType} cardData={cardData} />
    </div>
  );
}

export default Home;
