import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../api/stock-api";
import Modal from "./Modals";


const Header = lazy(() => import("./Header"));
const Chart = lazy(() => import("./Chart"));
const Overview = lazy(() => import("./Overview"));
const Details = lazy(() => import("./Details"));

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  const [modal, showModal] = useState(false);

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        if (error) {
          showModal(true);
          <Modal error={error} />;
        }
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
        if (error) {
          showModal(true);
          <Modal error={error} />;
        }
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div
        className={`h-screen overflow-x-hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr sm:gap-6 gap-4 p-4 sm:p-10  font-quicksand ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
        }`}
      >
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
          <Header name={stockDetails?.name} logo={stockDetails?.logo} />
        </div>
        <div className="md:col-span-2 row-span-4">
          <Chart />
        </div>
        <div className="sm:row-span-2 md:row-span-2 2xl:row-span-1">
          <Overview
            symbol={stockSymbol}
            price={quote.pc}
            change={quote.d}
            changePercent={quote.dp}
            currency={stockDetails.currency}
          />
        </div>
        <div className="row-span-2 sm:row-span-3">
          <Details details={stockDetails} />
        </div>
      </div>

      {modal ? <Modal /> : null}
    </Suspense>
  );
};

export default Dashboard;
