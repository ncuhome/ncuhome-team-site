import React from "react";
import "./index.scss";

const Loading: React.FC = () => {
  return (
    <div className="loader">
      <div className="side" />
      <div className="side" />
      <div className="side" />
      <div className="side" />
      <div className="side" />
      <div className="side" />
      <div className="side" />
      <div className="side" />
    </div>
  );
};

export default Loading;