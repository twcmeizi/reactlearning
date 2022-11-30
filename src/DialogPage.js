import React, { Component } from "react";
import Dialog from "./Dialog";
import axios from "axios";
const style = {
  width: "100px",
  height: "100px",
  background: "white",
  color: "red",
};
const bg = 'width: 100%;height: 100%;position: absolute;left: 0;top: 0;background: rgba(0,0,0,0.5)'
export default class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      tip: "",
    };
  }
  componentDidMount() {
    var that = this;
    axios
      .get("./json/test.json")
      .then(function (response) {
        console.log(response);
        that.setState({
          showDialog: true,
          tip: "获取成功",
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // setInterval(() => {
        // that.setState({
        // showDialog: false
        // })
        // }, 2000);
      });
  }
  test = () => {
    this.setState({
      showDialog: false,
    });
  };
  render() {
    const { showDialog, tip } = this.state;
    return (
      <div>
        <h3>DialogPage</h3>
        <button
          onClick={() =>
            this.setState({
              showDialog: !showDialog,
            })
          }
        >
          toggle
        </button>
        {showDialog && <Dialog children={tip} hideDialog={this.test} icon="messager-icon messager-info"/>}
      </div>
    );
  }
}
