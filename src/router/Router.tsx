import { Outlet, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import { WrongAccess } from "@/pages/Error/WrongAccess";
import Home from "@/pages/Home";
import PingerCheck from "@/pages/PingerCheck";

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
              path: "PingerCheck",
              element: <PingerCheck />,
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
