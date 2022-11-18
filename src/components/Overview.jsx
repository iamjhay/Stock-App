import React from "react";
import Card from "./Cards";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      {price ? (
        <>
          <span className="absolute left-4 top-1 sm:top-2 text-neutral-400 text-xs sm:text-sm uppercase">
            {symbol}
          </span>
          <div className="w-full h-full flex items-center justify-around">
            <span className="text-2xl xl:text-3xl flex items-center font-medium">
              ${price}
              <span className="text-base text-neutral-400 m-2">{currency}</span>
            </span>
            <span
              className={`text-base ${
                change > 0 ? "text-lime-500" : "text-red-500"
              }`}
            >
              {change}
              <span>({changePercent}%)</span>
            </span>
          </div>
        </>
      ) : (
        <div className="w-full h-full rounded-lg p-2 flex items-center justify-center lg:justify-between">
          <div className="animate-pulse w-full flex items-center justify-between">
            <span className="absolute left-4 top-2 text-neutral-400 text-sm uppercase w-8 h-2 sm:w-16 sm:h-4 rounded-md bg-gray-300"></span>
            <div className="w-full h-full flex items-center justify-around">
              <span className="text-2xl xl:text-3xl flex items-center font-medium">
                <span className="text-base text-neutral-400 m-2 bg-gray-300 p-3 sm:p-5 rounded-2xl w-24 sm:w-48"></span>
              </span>
              <span className="bg-gray-400 w-12 h-4 rounded-md"></span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Overview;
