import { RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import router from "./router/Router";
import "./assets/fonts/pretendardvariable-dynamic-subset.css";
import "./assets/fonts/poppins.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
