import "./transition.css";

import { cloneElement } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { tw } from "@/utils/tw";

export default function GlobalMain() {
  const location = useLocation();
  const Outlet = useOutlet();
  return (
    <TransitionGroup
      className="transitiongroup fixed flex h-full w-screen overflow-hidden"
      childFactory={(child) => {
        return cloneElement(child, {
          classNames: location.state?.transition || "fade",
        });
      }}
    >
      <CSSTransition key={location.pathname} timeout={300}>
        <div className={tw(location.pathname, "absolute flex max-h-[100vh] w-screen")}>
          <div className="BodyContainer relative flex w-full flex-row overflow-hidden">
            <div
              className={tw("min-h-[calc(100vh-50rem)]", "BodyWrapper relative flex w-screen flex-col overflow-auto")}
            >
              <div className="Body relative flex min-h-full min-w-full flex-col">{Outlet}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
