import React, { Component } from "react";
import axios from "axios";
import MovieDetail from "../components/movieDetail";

class DetailView extends Component {
  state = {
    id: this.props.match.params.id
  };

  render() {
    return (
      <div>
        <MovieDetail key={this.state.id} id={this.state.id} />
      </div>
    );
  }
}

export default DetailView;
