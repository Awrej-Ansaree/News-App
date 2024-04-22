import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import noThumbnail from "./no-thumbnail.png";
import Spinner from "./Spinner";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.updateProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    props.updateProgress(30);
    let parsedData = await data.json();
    props.updateProgress(60);

    if (parsedData.articles) {
      setLoading(false);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } else {
      setArticles([]);
      setLoading(false);
      setTotalResults(0);
    }
    props.updateProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News Daily`;
    updateNews();
  }, []);

  return (
    <>
      <h1 className="text-center my-4" style={{ textTransform: "capitalize" }}>
        {props.category} - Top Headlines
      </h1>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={totalResults > articles.length}
        loader={<Spinner />}
      >
        <div className="container my-4">
          <div className="row row-cols-sm-3 row-cols-1 g-4">
            {articles.map((element) => {
              return (
                <div key={element.url} className="col">
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage ? element.urlToImage : noThumbnail
                    }
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "us",
  category: "general",
  pageSize: 5,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
