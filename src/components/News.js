import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import noThumbnail from "./no-thumbnail.png";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 5,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3718ddf3af9245e290db7a651509bc87&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    parsedData.articles
      ? this.setState({
          loading: false,
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
        })
      : this.setState({ loading: false, articles: null, totalResults: null });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-5">
        <h1
          className="text-center my-4"
          style={{ textTransform: "capitalize" }}
        >
          {this.props.category} - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row row-cols-sm-3 row-cols-1 g-4">
          {!this.state.loading &&
            (this.state.articles ? (
              this.state.articles.map((element) => {
                return (
                  element.url !== "https://removed.com" && (
                    <div key={element.url} className="col">
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={
                          element.urlToImage ? element.urlToImage : noThumbnail
                        }
                        newsUrl={element.url}
                        author={element.author}
                        publishedAt={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  )
                );
              })
            ) : (
              <ErrorPage />
            ))}
        </div>
        <div className="container d-flex justify-content-between mt-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
