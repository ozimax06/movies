import React, { Component } from 'react';
import axios from 'axios';

import Movies from "../components/movies";

class HomeView extends Component {
  
  state = {
    movies: []
  };


  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=d331c4b01a300c6f096743c16cdff671&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
      .then(res => {
      
        const movies = [];

        var movieList = res.data.results;
        movieList.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1);

        movieList.forEach(function(element) {
          var movie = {};
          movie.id = element.id;
          movie.vote_average = element.vote_average;
          movie.title = element.title;
          movie.image  = "https://image.tmdb.org/t/p/w500_and_h282_face/" + element.poster_path;

          movies.push(movie);
        });
        this.setState({ movies });
      })
    }
   
    render() { 
        return ( 
            <div>
            <h2>Home</h2>
              <div className="container">
                <Movies
                  movies={this.state.movies}
                />
              </div>
            </div>
         );
    }
}
 
export default HomeView;

