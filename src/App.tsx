import React, { useState, useEffect } from "react";
import CoffeeList from "./components/CoffeeList";

export default function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setCoffeeData(data));
  }, []);
  return (
    <div className="App bg-custom-black font-bold">
      <div className="w-full h-64 header-bg bg-cover bg-center"></div>
      <div
        className="mx-auto bg-custom-dark text-custom-beige -mt-32 rounded-lg py-10 md:px-24"
        style={{ width: "85%" }}
      >
        <div className="relative py-12 px-4 text-center">
          {/* 背景圖片 */}
          <img
            src="/resources/vector.svg"
            alt="bg"
            className="absolute top-0 right-0 sm:right-24 w-80 object-cover z-0"
          />

          {/* 文字區塊 */}
          <div className="relative z-10 w-full p-2">
            <p className="text-[32px] mb-3">Our Collection</p>
            <p className="text-[14px] font-semibold text-custom-gray mb-4 w-full lg:w-3/5 mx-auto">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-6 text-[16px]">
          <button
            onClick={() => setShowAvailableOnly(false)}
            className={`px-4 py-2 rounded ${
              !showAvailableOnly
                ? "bg-custom-gray text-custom-beige"
                : "text-custom-beige"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setShowAvailableOnly(true)}
            className={`px-4 py-2 rounded ${
              showAvailableOnly
                ? "bg-custom-gray text-custom-beige"
                : "text-custom-beige"
            }`}
          >
            Available Now
          </button>
        </div>

        <CoffeeList
          filterAvailable={showAvailableOnly}
          coffeeData={coffeeData}
        />
      </div>
    </div>
  );
}
