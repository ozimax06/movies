import React, { Component } from 'react';
import Movies from "../components/movies";

class HomeView extends Component {
    state = {
        movies: [
          { id: 1, title: "movie-1", value: 0, image: "https://image.tmdb.org/t/p/w500_and_h282_face/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg" },
          { id: 2, title: "movie-2",value: 0, image: "https://image.tmdb.org/t/p/w500_and_h282_face/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg" },
          { id: 3, title: "movie-3",value: 0, image: "https://image.tmdb.org/t/p/w500_and_h282_face/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg"},
          { id: 4, title: "movie-4",value: 0, image: "https://image.tmdb.org/t/p/w500_and_h282_face/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg" },
          { id: 5, title: "movie-5",value: 0, image: "https://image.tmdb.org/t/p/w500_and_h282_face/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg" },
          { id: 6, title: "movie-6",value: 0, image: "https://image.tmdb.org/t/p/w500_and_h282_face/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg" }
        ]
      };
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

