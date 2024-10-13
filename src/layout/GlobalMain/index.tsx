import "./transition.css";

import { cloneElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import history from "@/utils/history";
import { tw } from "@/utils/tw";

export default function GlobalMain({ children }: { children: JSX.Element | JSX.Element[] | string }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <TransitionGroup
      className="relative flex h-full w-screen overflow-hidden"
      childFactory={(child) => {
        return cloneElement(child, {
          classNames: location.state?.transition || "",
        });
      }}
    >
      <CSSTransition key={pathname} timeout={400}>
        <div className={tw("absolute flex max-h-[100vh] w-screen")}>
          <div className="BodyContainer relative flex w-full flex-row overflow-hidden">
            <div
              className={tw("min-h-[calc(100vh-50rem)]", "BodyWrapper relative flex w-screen flex-col overflow-auto")}
            >
              <div className="Body relative flex min-h-full min-w-full flex-col">{children}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
