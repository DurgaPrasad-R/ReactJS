import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name,
      count: 0,
    };
    console.log("Child-Constructor");
  }
  render() {
    console.log("Child-render");
    console.log(this.state.username);
    return (
      <>
        <h1>Child Component Pasted</h1>
        <p>{this.state.count}</p>
      </>
    );
  }
  componentDidMount() {
    this.setState({
      count: 1,
    });
    console.log("Child-ComponentDidMount");
  }
}
export default Profile;
