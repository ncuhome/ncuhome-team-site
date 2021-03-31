import React from "react";
import "./style.scss";

interface Props {
  text: string;
  bgColor: "#fff" | "#FAFCFF";
}

const BoldButton: React.FC<Props> = ({ text }) => {
  return <div className="bold-btn">{text}</div>;
};

export default BoldButton;
