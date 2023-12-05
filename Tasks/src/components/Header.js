import useOnline from "../utils/useOnline";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const logo = (
  <div className="logo">
    <a href="/">
      <img src="https://static.vecteezy.com/system/resources/previews/009/385/573/non_2x/storefront-clipart-design-illustration-free-png.png" />
    </a>
    <div className="title"> Swiggy Lite </div>
  </div>
);
const Header = () => {
  const isOffline = useOnline(false);
  return (
    <div id="title1" className="header">
      {logo}
      <div className="list-items">
        <ul className="ulist">
          <li>{isOffline ? "🔴" : "🟢"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <AiOutlineShoppingCart className="ico" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
