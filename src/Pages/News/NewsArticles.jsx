import React, { useContext, useEffect, useState } from "react";
import { fetchNews } from "../../api/stock-api";
import Modal from "../../components/Modals";
import ThemeContext from "../../context/ThemeContext";
import { convertDateTimestampToDate } from "../../helpers/date-helper";

const NewsArticles = () => {
  const [news, setNews] = useState([]);
  const [modal, showModal] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const FetchNews = async () => {
      try {
        const result = await fetchNews("general");
        setNews(result);
      } catch (error) {
        setNews([]);
        if (error) {
          showModal(true);
        }
        console.log(error);
      }
    };

    FetchNews();
  }, []);

  return (
    <section
      className={`w-full py-16 sm:py-32 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="w-[95%] sm:w-[90%] lg:max-w-[1200px] mx-auto ">
        <div className="flex items-center justify-between flex-col gap-8 sm:gap-0 sm:flex-row ">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold ${
              darkMode ? " text-white" : "text-gray-900"
            }`}
          >
            Latest Articles
          </h2>
          <div
            className={`categories cursor-pointer flex items-center gap-5 sm:gap-8 md:gap-10 ${
              darkMode ? " text-white" : "text-gray-900"
            }`}
          >
            <li className="list-none tracking-wide xs:text-base sm:text-lg decoration-amber-400">
              General
            </li>
            <li className="list-none tracking-wide xs:text-base sm:text-lg">
              Forex
            </li>
            <li className="list-none tracking-wide xs:text-base sm:text-lg">
              Crypto
            </li>
            <li className="list-none tracking-wide xs:text-base sm:text-lg">
              Merger
            </li>
          </div>
        </div>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {news.length > 0 ? (
            <>
              {news.map((item) => (
                <a
                  href={item.url}
                  key={item.id}
                  className={`news__article cursor-pointer border-1 border-neutral-300 p-4 sm:p-6 md:p-8 hover:shadow-2xl drop-shadow-2xl  hover:shadow-slate-400 transition duration-700 ${
                    darkMode ? "hover:shadow-slate-600/75" : "bg-transparent"
                  }`}
                >
                  <div className="news__article--image overflow-hidden w-full sm:h-64 lg:h-72 ">
                    <img
                      src={item?.image}
                      alt={item.source}
                      className="w-full h-full object-cover transition duration-700 ease-in-out"
                    />
                  </div>
                  <div className="mt-5 flex gap-5 items-center">
                    <span className="bg-indigo-500 px-3 py-1 rounded-2xl text-sm text-center text-white capitalize">
                      {item.source}
                    </span>
                    <span className="text-sm">
                      {convertDateTimestampToDate(item?.datetime)}
                    </span>
                  </div>
                  <div
                    className={`mt-5 ${darkMode ? "text-white" : "text-black"}`}
                  >
                    <h4 className="text-lg font-medium">{item?.headline}</h4>
                    {/* <h1 className="mt-3">source: {item?.category}</h1> */}
                  </div>
                </a>
              ))}
            </>
          ) : (
            <>
              <h1>Loading...</h1>
            </>
          )}
        </div>

        {modal ? <Modal /> : "null"}
      </div>
    </section>
  );
};

export default NewsArticles;
