import React from "react";

export default function Card({ coffee }) {
  const { name, image, price, rating, votes, popular, available } = coffee;

  return (
    <div className="text-md font-bold rounded p-4 shadow hover:shadow-lg transition flex flex-col items-center text-custom-beige ">
      <div className="relative">
        <img src={image} alt={name} className="object-cover rounded-xl " />
        {popular && (
          <span className="absolute top-2 left-4 bg-custom-yellow font-bold px-2 py-1 rounded-xl">
            Popular
          </span>
        )}
      </div>
      <div className="flex justify-between items-center w-full px-2 pt-4">
        <h3 className="text-md">{name}</h3>
        <p className="text-[16px] bg-custom-green text-custom-black px-2 py-1 rounded">
          {price}
        </p>
      </div>
      <div className="flex justify-between items-center w-full px-2 pt-4">
        <div className="flex items-center">
          <img
            src={rating ? "resources/Star_fill.svg" : "resources/Star.svg"}
            alt={rating}
            className="w-xs object-cover rounded-xl pr-1"
          />
          {rating ? (
            <>
              <h3 className="text-left">
                {rating !== null && rating !== undefined
                  ? rating % 1 === 0
                    ? rating.toFixed(1)
                    : rating
                  : "No rating"}
              </h3>
              <span className="text-custom-gray">
                ({votes ? `${votes} votes` : "No"})
              </span>
            </>
          ) : (
            <p className="text-custom-gray">No rating</p>
          )}
        </div>
        <p
          className={`font-bold ${
            available ? "text-custom-red" : "text-custom-red"
          }`}
        >
          {available ? "" : "Sold out"}
        </p>
      </div>
    </div>
  );
}
