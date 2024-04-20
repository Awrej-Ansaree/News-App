import "./App.css";
import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  pageSize = 5;
  country = "us";
  apiKey = process.env.REACT_APP_NEWS_API;
  state = { progress: 0 };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <News
            key="home"
            pageSize={this.pageSize}
            country={this.country}
            category="general"
            apiKey={this.apiKey}
            setProgress={this.setProgress}
          />
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
            apiKey={this.apiKey}
            setProgress={this.setProgress}
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
            apiKey={this.apiKey}
            setProgress={this.setProgress}
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
            apiKey={this.apiKey}
            setProgress={this.setProgress}
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
            apiKey={this.apiKey}
            setProgress={this.setProgress}
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
            apiKey={this.apiKey}
            setProgress={this.setProgress}
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
            apiKey={this.apiKey}
            setProgress={this.setProgress}
          />
        </>
      ),
    },
  ]);

  render() {
    return (
      <>
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <RouterProvider router={this.router} />
      </>
    );
  }
}
