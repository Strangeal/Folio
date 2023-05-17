import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./component/Layout.tsx";
import Projects from "./pages/Projects.tsx";
import { ThemeContextProvider } from "./component/theme/ThemeContextProvider.tsx";
import About from "./pages/About.tsx";
import Dictionary from "./pages/Dictionary.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "dictionary",
            element: <Dictionary />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
