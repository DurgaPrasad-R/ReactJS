import { Component, useContext } from "react";
import Profile from "./ProfileComponent";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
const About = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Outlet />
      <h1>This is my learning Class 🚀</h1>
      <h1>
        {user.name}-{user.email}
      </h1>
      <p>I am learning React </p>
    </>
  );
};

class About1 extends Component {
  // first class component:-Parent component
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
    this.state = {
      name: this.props.name,
    };
  }
  render() {
    console.log("Parent-Render");
    // Child Component created for About and passing props from parent to child
    return (
      <>
        <h1>This is my learning Class 🚀</h1>
        <UserContext.Consumer>
          {(value) => (
            <h1>
              {value.user.name}-{value.user.email}
            </h1>
          )}
        </UserContext.Consumer>
        <p>I am learning React </p>
      </>
    );
  }
  componentDidMount() {
    // creating a time interval
    this.timer = setInterval(() => {
      console.log("Hello There!");
    }, 1000);
    console.log("Parent-ComponentDidMount");
  }
  componentWillUnmount() {
    // Clearing the interval when we go to a different component
    clearInterval(this.timer);
    console.log("Parent-Component Unmounted");
  }
}
export default About;
