import React from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { HashRouter as Router, useRoutes } from "react-router-dom";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import routes from "./routes";
import "./index.css";

dayjs.locale("zh-cn");

function App() {
  console.log("[App]", routes)

  const elements = useRoutes(routes);
  return elements;
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
