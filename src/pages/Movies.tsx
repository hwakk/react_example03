import React, { useState } from "react";
import Movie from "../components/Movie";

interface MovieSet {
  id: Date;
  title: string;
  year: number;
}

const Movies = () => {
  const [movies, setMovies] = useState<MovieSet[]>([]);

  const renderMovies = (id: Date) => {
    movies.map((movie) => {
      return <Movie key={movie.id} movie={movie} />;
    });
  };

  return (
    <>
      <h1>Movies</h1>
      {renderMovies}
    </>
  );
};

export default Movies;
