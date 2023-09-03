import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import truncateText from '../utils';

const cardStyle = {
  width: 280,
  height: 360,
  borderRadius: 0,
};

const imageStyle = {
  width: 280,
  height: 160,
  borderRadius: 0,
};

const titleStyle = {
  height: '2rem',
  lineHeight: '1.5rem',
  overflow: 'hidden',
};


const descriptionStyle = {
  height: '7rem',
  lineHeight: '1rem',
  overflow: 'hidden',
  fontWeight: '600',
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

const NewsCard: React.FC<NewsCardProps> = ({ news }) => (
  <Link to={`/detail/${encodeURIComponent(news.title)}`}>
    <Card hoverable style={cardStyle} cover={<img alt={news.title} src={news.urlToImage} style={imageStyle} />}>
      <Card.Meta
        title={<div style={titleStyle}>{truncateText(news.title, 2)}</div>}
        description={<div style={descriptionStyle}>{truncateText(news.description, 5)}</div>}
      />
    </Card>
  </Link>
);

export default NewsCard;
