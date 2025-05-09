import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Grid, Typography, Box } from "@mui/material";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <Box sx={{ px: 4, py: 5 }}>
      <Typography
        variant="h4"
        fontWeight={900}
        gutterBottom
        color="text.primary"
      >
        My Favorites
      </Typography>

      {favorites.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          You haven't added any movies to your favorites yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Favorites;
