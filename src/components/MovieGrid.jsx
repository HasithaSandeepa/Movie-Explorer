// components/MovieGrid.jsx
import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={7} sm={4} md={3} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
