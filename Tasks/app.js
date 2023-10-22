import React from "react";
import mainLogo from "./images/logo.png";
import { CgProfile } from "react-icons/cg";
import ReactDOM from "react-dom/client";
const logo = (
  <div className="logo">
    <img src={mainLogo}></img>
  </div>
);
const Dive = () => {
  return (
    <div id="title1" className="header">
      {logo}
      <div className="inp">
        <input type="text" />
      </div>
      <div className="person">
        <CgProfile />
      </div>
    </div>
  );
};
const title = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "Head1"),
  React.createElement("h2", {}, "Head2"),
  React.createElement("h3", {}, "Head3"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
const main = ReactDOM.createRoot(document.getElementById("main"));
main.render(title);
root.render(<Dive />);
