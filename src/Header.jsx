import { useContext, useState } from "react";
import moon from "./assets/assets/icons/moon.svg";
import sun from "./assets/assets/icons/sun.svg";
import logo from "./assets/assets/logo.svg";
import ring from "./assets/assets/ring.svg";
import shoppingCart from "./assets/assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "./context/movieContext";

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const { showDarkMode, setShowDarkMode } = useContext(ThemeContext);
  const { cartData } = useContext(MovieContext);

  const handleToggleCart = () => {
    setShowCartModal(!showCartModal);
  };
  const handleCloseCart = () => {
    setShowCartModal(false);
  };
  return (
    <>
      {showCartModal && (
        <CartDetails onCloseCart={handleCloseCart}></CartDetails>
      )}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowDarkMode(!showDarkMode)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                {showDarkMode ? (
                  <img src={sun} width="24" height="24" alt="" />
                ) : (
                  <img src={moon} width="24" height="24" alt="" />
                )}
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
                href="#"
                onClick={handleToggleCart}
              >
                <img src={shoppingCart} width="24" height="24" alt="" />
                <span className="absolute w-[25px] h-[25px] top-[-8px] left-6 bg-[#00D991] p-[2px] text-white rounded-[100%] flex justify-center items-center">
                  {cartData.length}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
