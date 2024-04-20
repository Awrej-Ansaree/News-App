import React, { Component } from "react";

export default class ErrorPage extends Component {
  render() {
    return (
      <div
        id="error-page"
        className="w-100 vh-100 d-flex align-items-center justify-content-center flex-column text-danger"
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
}
