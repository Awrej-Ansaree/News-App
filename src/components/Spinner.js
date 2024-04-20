import React, { Component } from "react";
import Loading from "./loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <img src={Loading} alt="" />
      </div>
    );
  }
}
