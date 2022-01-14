import React from "react";
import "./style.scss";

interface Props {
  text: string;
  bgColor: string;
  theme?: "light" | "dark";
  textColor?: string;
  borderColor?: string;
}

const BoldButton: React.FC<Props> = ({
  theme = "dark",
  text,
  textColor,
  borderColor,
}) => (
  <div
    className={theme === "dark" ? "bold-btn-color" : "bold-btn"}
    style={{ color: textColor, borderColor }}
  >
    {text}
  </div>
);

export default BoldButton;
