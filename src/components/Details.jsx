import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Card from "./Cards";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 100).toFixed(2);
  };
  return (
    <Card>
      {detailsList?.name ? (
        <>
          <ul
            className={`w-full h-full flex flex-col justify-between divide-y-1 overflow-y-scroll custom-scrollbar ${
              darkMode ? "divide-gray-800" : null
            }`}
          >
            {Object.keys(detailsList).map((item) => (
              <li
                key={item}
                className="flex-1 flex justify-between items-center"
              >
                <span>{detailsList[item]}:</span>
                {details[item] ? (
                  <span>
                    {item === "marketCapitalization"
                      ? `${convertMillionToBillion(details[item])}B`
                      : details[item]}
                  </span>
                ) : (
                  <div className="animate-pulse ">
                    <span className="bg-gray-400 px-10 rounded-md"></span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </Card>
  );
};

export default Details;
