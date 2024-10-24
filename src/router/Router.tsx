import { Outlet, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import { WrongAccess } from "@/pages/Error/WrongAccess";
import Home from "@/pages/Home";
import Map from "@/pages/Map";
import PingerCheck from "@/pages/PingerCheck/Home";
import PingerCheckDetail from "@/pages/PingerCheck/PingerCheckDetail";

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
              path: "Map",
              element: <Map />,
            },
            {
              path: "PingerCheck",
              element: <Outlet />,
              children: [
                { path: "", element: <PingerCheck /> },
                { path: "Detail", element: <PingerCheckDetail /> },
                { path: "DetailTemp", element: <PingerCheckDetail /> },
              ],
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
