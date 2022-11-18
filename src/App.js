import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuContext from "./context/MenuContext";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";
import News from "./Pages/News";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("GOOG");
  const [hide, setHide] = useState(true);
  const [open, setOpen] = useState(false);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  return (
    <div className="overflow-y-scroll h-screen">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MenuContext.Provider value={{ open, setOpen }}>
          <StockContext.Provider
            value={{
              stockSymbol,
              setStockSymbol,
              hide,
              setHide,
              openMobileSearch,
              setOpenMobileSearch,
            }}
          >
            <BrowserRouter>
              <Menu />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/news" element={<News />} />
              </Routes>
              <MenuButton />
            </BrowserRouter>
          </StockContext.Provider>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
