import React from "react";
import "./style.scss";
import BoldButton from "../components/BoldButton";
import homeBlog from "@/assets/img/home-blog.png"

const Blog: React.FC = () => {
  return (
    <div className="home-blog-wrapper">
      <div className="home-blog-left">
        <div className="home-blog-l-bg">
          <div className="home-blog-bg"></div>
          <img src={homeBlog} alt="blog" />
        </div>
      </div>
      <div className="home-blog-right">
        <div className="home-blog-title home-title">
          Blogs
        </div>
        <div className="home-blog-desc">
          <p>关于前端架构的一些思考</p>
          <p>南大家园的从0到1</p>
        </div>
        <BoldButton text="MORE" bgColor="#fff" />
      </div>
    </div>
  );
};

export default Blog;
