import React from 'react';
import './style.scss';
import BoldButton from '@/components/bold_button';
import homeBlog from '@/assets/img/home-blog.png';

const Blog: React.FC = () => (
  <div className="home-blog-wrapper">
    <div className="home-blog-left">
      <div className="home-blog-l-bg">
        <div className="home-blog-bg" />
        <img src={homeBlog} alt="blog" />
      </div>
    </div>
    <div className="home-blog-right">
      <div className="home-blog-title home-title">
        Treasures
      </div>
      <div className="home-blog-desc">
        <p>家园四年：破釜沉舟</p>
        <p>家园人的知识分享</p>
      </div>
      <div onClick={() => {
        window.location.replace('https://ncuhome.yuque.com/ncuhome');
      }}
      >
        <BoldButton text="MORE" bgColor="#fff" />
      </div>
    </div>
  </div>
);

export default Blog;
