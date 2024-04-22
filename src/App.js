import "./App.css";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default function App() {
  const pageSize = 6;
  const country = "us";
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const updateProgress = (progress) => {
    setProgress(progress);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <News
            key="home"
            pageSize={pageSize}
            country={country}
            category="general"
            apiKey={apiKey}
            updateProgress={updateProgress}
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
            pageSize={pageSize}
            country={country}
            category="business"
            apiKey={apiKey}
            updateProgress={updateProgress}
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
            pageSize={pageSize}
            country={country}
            category="entertainment"
            apiKey={apiKey}
            updateProgress={updateProgress}
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
            pageSize={pageSize}
            country={country}
            category="health"
            apiKey={apiKey}
            updateProgress={updateProgress}
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
            pageSize={pageSize}
            country={country}
            category="science"
            apiKey={apiKey}
            updateProgress={updateProgress}
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
            pageSize={pageSize}
            country={country}
            category="sports"
            apiKey={apiKey}
            updateProgress={updateProgress}
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
            pageSize={pageSize}
            country={country}
            category="technology"
            apiKey={apiKey}
            updateProgress={updateProgress}
          />
        </>
      ),
    },
  ]);

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} />
      <RouterProvider router={router} />
    </>
  );
}
