import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import log from "../../images/food_logo.png";
const logo = <img className="h-20 p-1" src={log} />;
const Header = () => {
  const isOffline = useOnline(false);
  return (
    <div id="title1" className="flex justify-between shadow-lg">
      {logo}
      <div className="flex items-center">
        <ul className="flex">
          <li className="mr-8">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-8">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mr-8">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mr-8">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="mr-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </li>
          <li className="mr-8">Login{isOffline ? "🔴" : "🟢"}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
