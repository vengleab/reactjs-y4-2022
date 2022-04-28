import React from "react";
import { useParams } from "react-router-dom";

const WithRouter = ({Component, ...props}) => {
  const params = useParams();
  return <Component {...props} params={{params}} />
}

export default WithRouter;