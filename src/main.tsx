import React from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import routes from "./routes";
import "./index.css";

dayjs.locale("zh-cn");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Routes>

        {
          renderRoutes(routes)
        }

          {/* <Route path="/" element={routes[0].component} /> */}
      </Routes>
    </ConfigProvider>
  </React.StrictMode>
);
