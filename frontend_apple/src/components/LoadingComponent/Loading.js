import { Spin } from "antd";
import React from "react";

const Loading = ({ children, isLoading, deplay = 200 }) => {
  return (
    <div>
      <Spin spinning={isLoading} delay={deplay}>
        {children}
      </Spin>
    </div>
  );
};

export default Loading;
