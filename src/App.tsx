import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import MainButtonModal from "./components/MainButtonModal";
import PingerCheckFooter from "./components/PingerCheckFooter";
import PingerCheckHeader from "./components/PingerCheckHeader";
import GlobalMain from "./layout/GlobalMain";

export default function App(): React.ReactElement {
  const location = useLocation();
  // 페이지가 이동될 때마다 스크롤 초기화
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  return (
    <main className="relative flex h-screen w-screen overflow-hidden">
      <GlobalMain />
      {location.pathname.startsWith("/PingerCheck/Detail") && <PingerCheckHeader />}
      {location.pathname.startsWith("/PingerCheck/Detail") && <PingerCheckFooter />}
      <MainButtonModal />
    </main>
  );
}
