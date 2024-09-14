import "./App.css";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <div>Contact Page</div>,
      },
      {
        path: "/Sign_Up",
        element: <div>Sign Up Page</div>,
      },
      {
        path: "/About",
        element: <div>About Page</div>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
