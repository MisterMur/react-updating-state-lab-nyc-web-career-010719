// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  state={
    timesClicked:0
  }
  handleOnClick=()=>{
    this.setState({timesClicked:++this.state.timesClicked})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
export default DigitalClicker
