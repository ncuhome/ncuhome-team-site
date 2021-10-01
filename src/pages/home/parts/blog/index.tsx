import React from "react";
import "./style.scss";
import BoldButton from "@/pages/components/bold_button";
import homeBlog from "@/assets/img/home-blog.png"
import { useHistory } from "react-router-dom";

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
        <div onClick={() => {
          window.location.replace(`https://ncuhome.yuque.com/books/share/3039ec5a-9809-4776-be71-b8f7cbea51c1`)
        }
        }>
          <BoldButton text="MORE" bgColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
