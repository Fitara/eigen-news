import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Space, Spin } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import '../index.css'

const apiKey = 'd8f85c61aa404304a795ee1f26dc4b69';

const { Title, Paragraph } = Typography;

interface News {
  title: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  description: string;
  content: string;
  url: string;
}

const NewsDetail: React.FC = () => {
  const { title } = useParams<{ title: string | undefined }>()
  const [newsDetail, setNewsDetail] = useState<News | null>(null);

  useEffect(() => {
    if (typeof title !== 'undefined') {
      const fetchNewsDetail = async () => {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${encodeURIComponent(
              title
            )}&apiKey=${apiKey}&pageSize=1&page=1`
          );

          if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
          }

          const data = await response.json();
          const article = data.articles[0] as News;

          setNewsDetail(article);
        } catch (error) {
          console.error('Error fetching news detail:', error);
        }
      };

      fetchNewsDetail();
    }
  }, [title]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    return date.toLocaleDateString(undefined, options).replace(/\//g, '-');
  };

  return (
    <div className="container mx-auto mt-6">
        <Link to="/">
        <Button
          type="text"
          icon={<LeftOutlined />}
          style={{color: "#000038", fontWeight: "600"}}
        >
          Back to Home
        </Button>
        </Link>
      {newsDetail ? (
        <div>
          <Space direction="vertical">
            <Title style={{fontFamily: 'Barlow', fontWeight: 'lighter'}} level={2}>{newsDetail.title}</Title>
            <img src={newsDetail.urlToImage} alt={newsDetail.title} style={{ maxWidth: '100%' }} />
            <div className='author-published'>
              <Typography.Text strong><span className='detail-author'>Author:</span>{newsDetail.author}</Typography.Text>
              <Typography.Text strong className="separator">
                |
              </Typography.Text>
              <Typography.Text strong>
                <span className='detail-published'>Published:</span>{formatDate(newsDetail.publishedAt)}
              </Typography.Text>
            </div>
            <Paragraph><span className='detail-description'>Description:</span>{newsDetail.description}</Paragraph>
            <Paragraph className='paragraph'>{newsDetail.content}</Paragraph>
            <Paragraph className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, voluptates minus possimus ipsam repellat eos facere facilis aut enim magnam accusamus molestiae quasi, ducimus deserunt. Ipsam quam ipsa maiores illo? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non risus ut massa volutpat dictum a ut nunc. Fusce a odio tristique, efficitur ipsum a, volutpat arcu. Sed eget metus a justo tincidunt tristique. Sed sed consectetur eros. Sed ac quam eget mi scelerisque varius eu ac elit. Sed nec lacus id tortor consectetur rhoncus. Aenean ac turpis non urna venenatis condimentum. Vivamus volutpat volutpat lorem non bibendum. Fusce posuere vel risus in vestibulum. Aliquam erat volutpat. Aenean vitae placerat velit. Curabitur lacinia euismod leo, in vestibulum turpis tristique et. Nulla facilisi. Suspendisse potenti. In ullamcorper, quam id dictum convallis, purus elit efficitur metus, nec rutrum tortor libero nec tortor. Aenean a nunc in nisl iaculis tristique. Etiam varius tellus ac justo egestas, a sollicitudin nulla vestibulum. Phasellus non tortor a orci interdum suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut sapiente facilis odio beatae qui laboriosam dolorem. Nulla, voluptate facere in itaque consequatur eos numquam iste voluptatum quo provident quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci suscipit? Facilis doloribus non qui error vero aliquid saepe ipsam natus repellat eos voluptates, explicabo animi dolorum consequatur consectetur itaque.</Paragraph>
            <div className="button-read">
              <Button
                type="default"
                href={newsDetail.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "#000038", fontWeight: "600"}}
              >
                Read More
              </Button>
            </div>
          </Space>
        </div>
      ) : (
          <div className='laoding-container center-spin'>
            <Spin size='default' tip='Loading...'/>
          </div>
      )}
    </div>
  );
};

export default NewsDetail;
