import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return this.renderMovies();
  }

  deleteItem = (movieId) => {
    // let updatedMovies = [];
    // for (let index in this.state.movies) {
    //   const movie = this.state.movies[index];
    //   if (movieId !== movie._id) {
    //     updatedMovies.push(movie);
    //   }
    // }
    let updatedMovies = this.state.movies.filter((m) => m._id !== movieId);
    console.log(`Movies left: ${updatedMovies.length}`);
    this.setState({ movies: updatedMovies });
  };

  renderMovies() {
    if (this.state.movies.length <= 0) {
      return <h1>No movies left in catalogue.</h1>;
    }
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Number In Stock</th>
              <th>Daily Rental</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteItem(movie._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movie;
