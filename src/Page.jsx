import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context/movieContext";

const Page = () => {
  const { showDarkMode } = useContext(ThemeContext);
  return (
    <div className={showDarkMode ? "dark w-full h-full" : ""}>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Page;
