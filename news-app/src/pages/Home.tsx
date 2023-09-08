import Card from '../components/Card';
import Carousel from '../components/Carousel';
import { Row, Col, Pagination, Typography, Spin } from 'antd';
import { PhoneFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import '../index.css'

const apiKey = 'd8f85c61aa404304a795ee1f26dc4b69'

interface News {
  id: string;
  title: string;
  url: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const { Title } = Typography;

const adContainerStyle: React.CSSProperties = {
  backgroundImage:
    "url('https://media.licdn.com/dms/image/D4D12AQE4BhlZs2WPKw/article-cover_image-shrink_720_1280/0/1666246379311?e=2147483647&v=beta&t=PtlECn4x-HOEWeKaYMN01W3OCvceFPTL3NSDxkCQTtc')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  justifyContent: 'center',
  backgroundSize: '100%',
  flexDirection: 'row',
  marginLeft: '40px',
  objectFit: 'cover',
  marginTop: '40px',
  color: '#000038',
  display: 'flex',
  height: '400px',
  alignItems: 'start',
};

const titleIconStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '16px',
  fontSize: '24px',
};

const titleStyle: React.CSSProperties = {
  display: 'flex',
  color: '#000038',
  marginLeft: '5px',
  fontSize: '24px',
};

export default function Home() {
  const [carouselArticles, setCarouselArticles] = useState<News[]>([]);
  const [cardArticles, setCardArticles] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalArticles = 40;
  const articlesPerPage:number = 12;

  const fetchCarouselData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}&page=1`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      const data = await response.json();
      const filteredArticles: News[] = data.articles
        .filter(
          (article: News) =>
            article.title &&
            article.url &&
            article.description &&
            article.urlToImage &&
            article.publishedAt &&
            article.content
        )
        .slice(0, 3);

      setCarouselArticles(filteredArticles);
    } catch (error) {
      console.error('Error fetching carousel data:', error);
    }
  };

  const fetchData = async (page: number) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}&page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      const data = await response.json();
      const filteredArticles: News[] = data.articles
        .filter(
          (article: News) =>
            article.title &&
            article.url &&
            article.description &&
            article.urlToImage &&
            article.publishedAt &&
            article.content
        );

      const titleSet = new Set<string>();

      const uniqueArticles: News[] = filteredArticles.filter((article) => {
        if (!titleSet.has(article.title)) {
          titleSet.add(article.title);
          return true;
        }
        return false;
      });
      
      setCardArticles(uniqueArticles.slice(3, (articlesPerPage + 3)));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCarouselData();
    fetchData(currentPage);
  }, [currentPage]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  }

  return (
    <section>
      <Carousel articles={carouselArticles} />
      <Title className='title-news'>News</Title>
      <div className="container mx-auto">
        <Row justify="center" gutter={[16, 16]}>
          {isLoading ? (
            <div className='loading-container center-spin'>
              <Spin size='default' />
            </div>
          ) : (
            cardArticles.map((article, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card news={article} />
              </Col>
            ))
          )}
        </Row>
        <div className='pagination-container'>
          <Pagination
            current={currentPage}
            total={totalArticles}
            pageSize={articlesPerPage}
            onChange={onPageChange}
            showSizeChanger={false}
          />
        </div>
      </div>
      <div style={adContainerStyle}>
        <div style={titleIconStyle}>
          <Title level={1} style={titleStyle}>You can place an ad here</Title>
          <PhoneFilled style={titleIconStyle} /> {/* Ikon iklan */}
        </div>
      </div>
    </section>
  );
}
