import React from "react";
import List from "../components/Lists";
import Header from "../../Header";
import BlogFooter from "./BlogFooter"
import "./style.scss"

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-header-wrapper">
        <Header />
      </div>
      <div className="blog-title-wrapper">
        <p className="blog-title-text1">Blogs</p>
        <p className="blog-title-text2">Thoughts, stories and ideas...</p>
        <p className="blog-title-text3">家园人的点滴思考与分享</p>
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
