// CoffeeList

import React, { useState, useEffect } from "react";
import Card from "./Card";

function CoffeeList({ filterAvailable, coffeeData }) {
  // const [coffeeData, setCoffeeData] = useState([]);
  const filteredData = filterAvailable
    ? coffeeData.filter((item) => item.available)
    : coffeeData;

  return (
    <div className="coffee-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 place-items-center">
      {filteredData.map((coffee) => (
        <div className="w-60 md:w-80">
          <Card key={coffee.id} coffee={coffee} />
        </div>
      ))}
    </div>
  );
}

export default CoffeeList;
