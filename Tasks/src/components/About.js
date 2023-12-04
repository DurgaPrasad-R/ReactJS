import { Component } from "react";
import Profile from "./ProfileComponent";
const About2 = () => {
  return (
    <>
      <h1>This is my learning Class 🚀</h1>
      <p>I am learning React </p>
    </>
  );
};

class About extends Component {
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
        <p>I am learning React </p>
        <Profile name={this.state.name} />
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
