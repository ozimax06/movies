import React, { Component } from "react";
import axios from "axios";
import Movies from "../components/movieDetail";
import MovieDetail from "../components/movieDetail";

class DetailView extends Component {
  state = {
    id: 0
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.setState({ id });
  }
  render() {
    return (
      <div>
        <h2>{this.state.id}</h2>
        <MovieDetail />
      </div>
    );
  }
}

export default DetailView;
