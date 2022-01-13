import React from "react";
import { useMedia } from "react-use";
import HorizontalScroll from "./components/HorizontalScroll";
import Parts from "./parts";
import "./index.scss";

const Home: React.FC = () => {
  const isWide = useMedia("(min-width: 768px)", true);

  return (
    <div className="home-pages-container">
      {isWide ? (
        <HorizontalScroll>
          <Parts />
        </HorizontalScroll>
      ) : (
        <Parts />
      )}
    </div>
  );
};

export default Home;
