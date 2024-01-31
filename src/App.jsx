import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context/movieContext";

function App() {
  const [cartData, setCartData] = useState([]);
  const [showDarkMode, setShowDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ showDarkMode, setShowDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page></Page>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
