import React from "react";
import UserDetails from "./UserDetails"

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent class first call")
    this.state={
      count:0,
    }
  }

  componentDidMount() {
    console.log("Parent class componentDidMount")
  }

  render() {
    console.log("Parent class second call")
    return (
      <div>
        <UserDetails name={"Xyz"} class={"10th"} count={this.state.count}/>
        {/* <UserDetails name={"Elon Mask"} class={"10th"} /> */}
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increase</button>
      </div>
    )
  }
}


export default AboutComponent