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
          overview: res.data.overview
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
            <p className="lead">
              This example is a quick exercise to fixed to top navbar works. As
              you scroll, it will remain fixed to the top of your browser's
              viewport.
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default MovieDetail;
