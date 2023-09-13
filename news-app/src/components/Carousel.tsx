import { Carousel } from "antd";
import { Link } from "react-router-dom";

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
  textAlign: "center",
  marginBottom: "20px",
  marginTop: "10px",
  fontSize: "18px",
  padding: "10px",
  color: "black",
  bottom: "10%",
  width: "75%",
  left: "50%",
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

interface CarouselProps {
  articles: News[];
}

const NewsCarousel: React.FC<CarouselProps> = ({ articles }) => {
  return (
    <Carousel autoplay style={{marginTop: "10px"}}>
      {articles.map((article, index) => (
        <div style={contentStyle} key={index}>
          <Link to={`/detail/${encodeURIComponent(article.title)}`}>
            <img
              src={article.urlToImage}
              style={imageStyle}
              alt={article.title}
            />
            <div style={textStyle}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default NewsCarousel;
