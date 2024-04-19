import { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";
import Home from "@/pages/Home/index";
import Detail from "@/pages/Home/detail";
import Page404 from "@/pages/System/404";
import PageContainer from "@/layout/PageContainer";


interface RouteObjectWithMeta extends NonIndexRouteObject {
  meta?: {
    title?: string;
    sidebar?: boolean;
    auth?: boolean;
    icon?: string;
    order?: number;
  };
  children?: RouteObjectWithMeta[];
}

type RouteObject = IndexRouteObject | RouteObjectWithMeta;


const wrapper = (routes: RouteObjectWithMeta[]) => {

  return routes.map((route, index) => {
    if (route.element) {
      const meta = route.meta  || {};

      route.element = <PageContainer {...meta} key={index}>{route.element}</PageContainer>;
    }
  
    if (route.children && Array.isArray(route.children)) {
      route.children = wrapper(route.children);
    }

    return route;
  })
}

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            element: <Home />,
            meta: {
              title: "Home",
              sidebar: true,
              icon: "home",
              order: 0
            }
          },
          {
            path: "detail",
            element: <Detail />,
            meta: {
              title: "Home",
              sidebar: true,
              icon: "home",
              order: 1,
            }
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <Page404 />,
    meta: {
      title: "404",
      sidebar: false,
    },
  },
]

export default wrapper(routes as RouteObjectWithMeta[]);
