import React, { Component } from "react";
import Movie from "./movie";

class Movies extends Component {
  render() {
    return (
      <div className="row">
        {this.props.movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            image={movie.image}
            onView={this.props.onView}
          />
        ))}
      </div>
    );
  }
}

export default Movies;
