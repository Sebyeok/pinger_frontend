import { Outlet, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import { WrongAccess } from "@/pages/Error/WrongAccess";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <App />,
      errorElement: <WrongAccess />,
      children: [
        {
          path: "",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
      ],
    },
    {
      path: "error",
      element: <WrongAccess />,
    },
  ],
  { basename: "/pinger_deploy/" }
);

export default router;
