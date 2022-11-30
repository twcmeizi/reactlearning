import React, { Component } from "react";

const FancyButton = React.forwardRef((props, ref) => {
  console.log(props,ref)
  return (
    <div>
      <input ref={ref} className="FancyButton" {...props} ></input>
    </div>
  );
});

const ref = React.createRef();
export default class Refs extends Component {
  test(){
    console.log(ref.current)
  }
  render() {
    return <FancyButton ref={ref} test={this.test}>Click me!</FancyButton>;
  }
}
