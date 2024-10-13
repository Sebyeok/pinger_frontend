import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import MainButtonModal from "./components/MainButtonModal";
import GlobalMain from "./layout/GlobalMain";

export default function App(): React.ReactElement {
  const location = useLocation();
  // 페이지가 이동될 때마다 스크롤 초기화
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="absolute flex h-screen w-screen overflow-hidden bg-black">
      <GlobalMain>
        <Outlet />
      </GlobalMain>
      <MainButtonModal />
    </main>
  );
}
