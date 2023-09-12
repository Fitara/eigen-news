import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Tooltip } from "antd";

const cardStyle: React.CSSProperties = {
  width: 280,
  height: 360,
  borderRadius: 0,
};

const imageStyle: React.CSSProperties = {
  width: 280,
  height: 160,
  borderRadius: 0,
};

const titleStyle: React.CSSProperties = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "3",
  lineHeight: "1.5rem",
  height: "auto",
};

const descriptionStyle: React.CSSProperties = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "4",
  lineHeight: "1.5rem",
  fontWeight: "600",
};

const tooltipStyle: React.CSSProperties = {
  backgroundColor: "#000083",
  color: "white",
  width: "auto",
  height: "auto",
};

interface News {
  id: string;
  title: string;
  url: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isTitleTooltipVisible, setIsTitleTooltipVisible] = useState(false);
  const [isDescriptionTooltipVisible, setIsDescriptionTooltipVisible] = useState(false);

  useEffect(() => {
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;

    if (titleElement) {
      if (
        titleElement.scrollHeight > titleElement.clientHeight ||
        titleElement.scrollWidth > titleElement.clientWidth
      ) {
        setIsTitleTooltipVisible(true);
      } else {
        setIsTitleTooltipVisible(false);
      }
    }

    if (descriptionElement) {
      if (
        descriptionElement.scrollHeight > descriptionElement.clientHeight ||
        descriptionElement.scrollWidth > descriptionElement.clientWidth
      ) {
        setIsDescriptionTooltipVisible(true);
      } else {
        setIsDescriptionTooltipVisible(false);
      }
    }
  }, [news.title, news.description]);

  return (
    <Link to={`/detail/${encodeURIComponent(news.title)}`}>
      <Card
        hoverable
        style={cardStyle}
        cover={<img alt={news.title} src={news.urlToImage} style={imageStyle} />}
      >
        <Card.Meta
          title={
            <div ref={titleRef} style={titleStyle}>
              {isTitleTooltipVisible ? (
                <Tooltip title={news.title} overlayStyle={tooltipStyle}>
                  {news.title}
                </Tooltip>
              ) : (
                news.title
              )}
            </div>
          }
          description={
            <div ref={descriptionRef} style={descriptionStyle}>
              {isDescriptionTooltipVisible ? (
                <Tooltip title={news.description} overlayStyle={tooltipStyle}>
                  {news.description}
                </Tooltip>
              ) : (
                news.description
              )}
            </div>
          }
        />
      </Card>
    </Link>
  );
};

export default NewsCard;
