import React from "react";
import List from "../components/Lists";
import Header from "../../Header";
import BlogFooter from "./BlogFooter"
import blogcircle1 from "@/assets/img/blog-circle1.png"
import blogcircle2 from "@/assets/img/blog-circle2.png"
import blogcircle3 from "@/assets/img/blog-circle3.png"
import blogcircle4 from "@/assets/img/blog-circle4.png"
import blogcircle5 from "@/assets/img/blog-circle5.png"
import "./style.scss"

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-header-wrapper">
        <Header />
      </div>
      <div className="blog-title-wrapper">
        <img className="blog-title-circle1" src={blogcircle1} alt="" />
        <img className="blog-title-circle3" src={blogcircle3} alt="" />
        <img className="blog-title-circle2" src={blogcircle2} alt="" />
        <p className="blog-title-text1">Blogs</p>
        <p className="blog-title-text2">Thoughts, stories and ideas...</p>
        <p className="blog-title-text3">家园人的点滴思考与分享</p>
        <img className="blog-title-circle4" src={blogcircle4} alt="" />
        <img className="blog-title-circle5" src={blogcircle5} alt="" />
      </div>
      <div className="blog-content-wrapper">
        <List />
      </div>
      <div className="blog-footer-wrapper">
        <BlogFooter />
      </div>
    </div>
  );
};

export default Blog;
