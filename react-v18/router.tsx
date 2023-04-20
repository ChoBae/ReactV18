import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/index";
import UseTransition from "./src/pages/useTransition/index";

interface RouterBase {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
}

const routerData: RouterBase[] = [
  {
    id: 0,
    path: "/*",
    label: "Home",
    element: <Home />,
  },
  {
    id: 1,
    path: "/",
    label: "Home",
    element: <Home />,
  },
  {
    id: 2,
    path: "/useTransition",
    label: "리스트",
    element: <UseTransition />,
  },
  {
    id: 3,
    path: "/error",
    label: "에러",
    element: <div>에러 페이지</div>,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);
