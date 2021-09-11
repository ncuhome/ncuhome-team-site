import React from "react";
import styled from "styled-components";
import "./style.scss";

interface Props {
  text: string;
  // bgColor: "#fff" | "#FAFCFF" | "#ABD9F8" | "#1B8FF4";
  // bgColor: CSSProperties["backgroundColor"]
  // color: CSSProperties["color"];
  // border: CSSProperties["border"];

}

const ButtonForSmall = styled.div`
  height: 36px;
  width: 120px;
  border: 2px solid black;
  border-radius: 16px;
  letter-spacing: 2px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  line-height: 36px;
  transition: color 0.2s;

  :hover{
    border: 2px solid #1B8FF4;
  }
`;

const BoldButton: React.FC<Props> = (props) => {
  // const stylesSheet = {
  //   color:
  //   color: props.color,
  //   backgroundColor: props.bgColor,
  //   border: props.border,
  // }

  return (
    <ButtonForSmall>{props.text}</ButtonForSmall>
    // <div className="bold_btn">{props.text}</div>
  );
};

export default BoldButton;
