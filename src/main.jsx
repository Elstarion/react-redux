import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Posts } from "./components/Posts.jsx";
import { New } from "./components/New.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Posts />,
        },
        {
          path: "new",
          element: <New />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.DEV ? "/" : "/react-redux/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
