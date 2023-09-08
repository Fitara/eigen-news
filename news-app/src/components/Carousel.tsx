import React, { useState } from "react";
import { Carousel } from "antd";
import truncateText  from "../utils"

const contentStyle: React.CSSProperties = {
  height: "200px",
  lineHeight: "160px",
  position: "relative",
  marginTop: "5px",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
  opacity: 0.8,
};

const textStyle: React.CSSProperties = {
  transform: "translateX(-50%)",
  position: "relative",
  marginBottom: "20px",
  marginTop: "10px",
  fontSize: "18px",
  bottom: "10%",
  left: "50%",
  width: "75%",
  padding: "10px",
  color: "black",
  textAlign: "center",
};

const maxLinesDefault: number = 2;

interface News {
  id: string;
  title: string;
  url: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface CarouselProps {
  articles: News[];
}

const NewsCarousel: React.FC<CarouselProps> = ({ articles }) => {
  const [maxLines ] = useState<number>(maxLinesDefault);

  return (
    <Carousel autoplay>
      {articles.map((article, index) => (
        <div style={contentStyle} key={index}>
          <img
            src={article.urlToImage}
            style={imageStyle}
            alt={article.title}
          />
          <div style={textStyle}>
            <h3>{article.title}</h3>
            <p>{truncateText(article.description, maxLines)}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default NewsCarousel;
