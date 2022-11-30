import React, { Component } from "react";
import { createPortal } from "react-dom";

const style = {
  width: "100px",
  height: "100px",
  background: "white",
  borderRadius: "5px",
  textAlign: "center",
  lineHeight: "100px",
  position: "absolute",
  left: " 50%",
  top: "50%",
  transform: "translate(-50px, -50px)",
};
const bg2 = "width: 100%;height: 100%;position: absolute;left: 0;top: 0;background: rgba(0,0,0,0.1)";
export default class Dialog extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    const doc = window.document;
    this.node = doc.createElement("div");
    this.bg = doc.createAttribute("class");
    this.bg.value = "test";
    this.node.setAttributeNode(this.bg);

    this.style = doc.createAttribute("style");
    this.style.value = this.props.bg || bg2;
    this.node.setAttributeNode(this.style);

    var _class = doc.getElementsByClassName("test")[0];
    if (_class == null) {
      doc.body.appendChild(this.node);
    } else {
      _class.remove();
      doc.body.appendChild(this.node);
    }
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
  render() {
    const { hideDialog } = this.props;
    return createPortal(
      <div className="dialog" style={this.props.style}>
        <i class="fas fa-search"></i>
          {/* <i class={this.props.icon} aria-hidden="true"></i> */}
        {this.props.children}
        {typeof hideDialog === "function" && <button onClick={hideDialog}>关掉弹窗</button>}
      </div>,
      this.node
    );
  }
}
Dialog.defaultProps = {
  style: style,
};

