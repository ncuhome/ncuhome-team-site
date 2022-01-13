import React from 'react';
import './style.scss';

interface Props {
  text: string;
  bgColor: '#fff' | '#FAFCFF' | '#ABD9F8' | '#1B8FF4';
}

const BoldButton: React.FC<Props> = ({ text }) => (
  <div className="bold-btn">
    {text}
  </div>
);

export default BoldButton;
