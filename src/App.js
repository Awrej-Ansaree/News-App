import "./App.css";
import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  pageSize = 5;
  country = "us";
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <News key="home" pageSize={this.pageSize} country={this.country} category="general" />
          </>
        ),
      },
      {
        path: "/business",
        element: (
          <>
            <Navbar />
            <News
              key="business"
              pageSize={this.pageSize}
              country={this.country}
              category="business"
            />
          </>
        ),
      },
      {
        path: "/entertainment",
        element: (
          <>
            <Navbar />
            <News
              key="entertainment"
              pageSize={this.pageSize}
              country={this.country}
              category="entertainment"
            />
          </>
        ),
      },
      {
        path: "/health",
        element: (
          <>
            <Navbar />
            <News
              key="health"
              pageSize={this.pageSize}
              country={this.country}
              category="health"
            />
          </>
        ),
      },
      {
        path: "/science",
        element: (
          <>
            <Navbar />
            <News
              key="science"
              pageSize={this.pageSize}
              country={this.country}
              category="science"
            />
          </>
        ),
      },
      {
        path: "/sports",
        element: (
          <>
            <Navbar />
            <News
              key="sports"
              pageSize={this.pageSize}
              country={this.country}
              category="sports"
            />
          </>
        ),
      },
      {
        path: "/technology",
        element: (
          <>
            <Navbar />
            <News
              key="technology"
              pageSize={this.pageSize}
              country={this.country}
              category="technology"
            />
          </>
        ),
      },
    ]);

    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
