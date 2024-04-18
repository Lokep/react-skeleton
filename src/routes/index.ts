import { RouteConfig } from "react-router-config"
import Home from "@/pages/Home/index"

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  }
]

export default routes