import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Services from "./components/Services.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);