import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Reg from "./reg/Reg";
import Log from "./auth/Auth";
import { useSelector } from "react-redux";
import MainPage from "./MainPage";
import Workspace from "./workspace";
import NewModalAddCard  from "./NewModalAddCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/reg" />,
  },
  {
    path: "/reg",
    element: <Reg />,
  },
  {
    path: "/auth",
    element: <Log />,
  },
]);

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/reg",
    element: <Navigate to="/" />,
  },
  {
    path: "/auth",
    element: <Navigate to="/" />,
  },
]);

const authRouterAdmin = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/reg",
    element: <Navigate to="/" />,
  },
  {
    path: "/auth",
    element: <Navigate to="/" />,
  },
  {
    path: "admin",
    element: <>admin</>,
  },
  {
    path: "/workspace",
    element: <Workspace />,
  },
  {
    path: "/MainPage",
    element: <MainPage />,
  },
  {
    path: "/test",
    element: <NewModalAddCard  />,
  },
]);

function App() {
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  console.log(token);

  return token ? (
    role === "ADMIN" ? (
      <RouterProvider router={authRouterAdmin} />
    ) : (
      <RouterProvider router={authRouterAdmin} />
    )
  ) : (
    <RouterProvider router={router} />
  );
}

export default App;
