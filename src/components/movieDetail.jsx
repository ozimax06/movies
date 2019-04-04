import React, { Component } from "react";
import axios from "axios";

class MovieDetail extends Component {
  state = {
    id: 0,
    popularity: 0,
    release_date: "",
    image: "",
    overview: "",
    title: ""
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.id +
          "?api_key=d331c4b01a300c6f096743c16cdff671&language=en-US"
      )
      .then(res => {
        this.setState({
          title: res.data.original_title,
          image:
            "https://image.tmdb.org/t/p/w500_and_h282_face/" +
            res.data.poster_path,
          popularity: res.data.popularity,
          overview: res.data.overview,
          release_date: res.data.release_date,
          genres: res.data.genres
        });
      });
  }

  render() {
    return (
      <div>
        <main role="main" className="container">
          <div className="jumbotron">
            <h1>{this.state.title}</h1>
            <img
              className="card-img-top movie-detail-image"
              src={this.state.image}
              alt="Card image cap"
            />
            <p className="lead">{this.state.overview}</p>
            <div className="row">
              <div className="col-sm">
                Release Date: <b>{this.state.release_date}</b>
              </div>
              <div className="col-sm" />
              Popularity: <b> {this.state.popularity}</b>
              <div className="col-sm" />
              {this.formatGenres(this.state.genres)}
            </div>
          </div>
        </main>
      </div>
    );
  }

  formatGenres(genres) {
    if (genres !== undefined) {
      let result = "";
      genres.forEach(element => {
        result += element.name + " ";
      });
      return result;
    }
    return "";
  }
}

export default MovieDetail;
