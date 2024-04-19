import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Access from "@/layout/Access";
import LeftBar from "@/layout/LeftBar";

const PageContainer = (props: any) => {
  console.log("[PageContainer]: ", props);

  const params = useParams();
  console.log("[params]: ", params);

  const location = useLocation();
  console.log("[location]: ", location);

  return (
    <Access>
      <div className="page-container w-screen h-screen bg-[#f3f4f5] flex items-start">
        <LeftBar />
        <div className="flex-1 h-screen overflow-y-auto flex flex-col">
          <div className="header bg-white h-16 flex items-center px-4">
            {" "}
            this is header{" "}
          </div>

          <div className="flex-1 w-full h-0 p-4">{props.children}</div>
        </div>
      </div>
    </Access>
  );
};

export default PageContainer;
