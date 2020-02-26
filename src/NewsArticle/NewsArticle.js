import React from "react";
import { useState, useEffect } from "react";
import "./NewsArticle.scss";

const NewsArticle = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("../mockData/news.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setNews(data);
      })
      .catch(e => {
        console.log("error");
      });
  }, []);
  return (
    <>
      <div className="news-article-ctr">
        {news.map(item => {
          return <div className="article">{item.description}</div>;
        })}
      </div>
    </>
  );
};

export default NewsArticle;
