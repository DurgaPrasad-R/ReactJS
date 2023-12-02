import { AiOutlineShoppingCart } from "react-icons/ai";
const logo = (
  <div className="logo">
    <a href="/">
      <img src="https://static.vecteezy.com/system/resources/previews/009/385/573/non_2x/storefront-clipart-design-illustration-free-png.png" />
    </a>
    <div className="title"> Swiggy Lite </div>
  </div>
);
const Header = () => {
  return (
    <div id="title1" className="header">
      {logo}
      <div className="list-items">
        <ul className="ulist">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Home</li>
          <li>
            <AiOutlineShoppingCart className="ico" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
