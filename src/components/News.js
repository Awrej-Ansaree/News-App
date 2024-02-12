import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3718ddf3af9245e290db7a651509bc87&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3718ddf3af9245e290db7a651509bc87&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3718ddf3af9245e290db7a651509bc87&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <div className="container my-5">
        <h1>News Daily - Top Headlines</h1>
        <div className="row g-4 mt-3">
          {this.state.articles.map((element) => {
            return (
              element.url !== "https://removed.com" && (
                <div key={element.url} className="col">
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif"
                    }
                    newsUrl={element.url}
                  />
                </div>
              )
            );
          })}
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
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
