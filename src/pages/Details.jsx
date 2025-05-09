import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/tmdb";
import {
  Typography,
  Box,
  Grid,
  CircularProgress,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

// This component is responsible for rendering the details of a specific movie.
const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const trailerUrl = movie?.videos?.results?.find((v) => v.type === "Trailer")
    ? `https://www.youtube.com/watch?v=${
        movie.videos.results.find((v) => v.type === "Trailer").key
      }`
    : null;

  // Fetch movie details when the component mounts or when the id changes
  useEffect(() => {
    fetchMovieDetails(id).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie)
    return (
      <Box textAlign="center" mt={5}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box>
      {/* Backdrop Section */}
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          width: "100%",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          color: "#fff",
        }}
      >
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))",
            zIndex: 1,
          }}
        />

        {/* Info Section */}
        <Grid
          container
          spacing={4}
          sx={{ zIndex: 2, p: 4 }}
          alignItems="flex-end"
        >
          {/* Poster */}
          <Grid item xs={12} sm={4} md={3}>
            <Box
              sx={{
                position: "relative",
                top: "-100px", // Moves poster up into the backdrop
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  borderRadius: "10px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
                  border: "3px solid #F6C800",
                }}
              />
            </Box>
          </Grid>

          {/* Movie Info */}
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h3" fontWeight={900} gutterBottom>
              {movie.title}
            </Typography>
            {movie.tagline && (
              <Typography
                variant="h6"
                fontStyle="italic"
                gutterBottom
                color="grey.300"
              >
                {movie.tagline}
              </Typography>
            )}
            <Typography variant="body1" gutterBottom>
              {movie.vote_average} ({movie.vote_count} votes)
            </Typography>
            <Typography variant="body1" gutterBottom>
              {movie.runtime} min
            </Typography>
            <Typography variant="body1" gutterBottom>
              Release date: {movie.release_date}
            </Typography>

            {/* Genres as Chips */}
            <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
              {movie.genres.map((genre) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  sx={{
                    backgroundColor: "#F6C800",
                    color: "#000",
                    fontWeight: 600,
                    userSelect: "none",
                  }}
                />
              ))}
            </Stack>
            {trailerUrl && (
              <Button
                variant="outlined"
                href={trailerUrl}
                target="_blank"
                startIcon={<YouTubeIcon />}
                sx={{ mt: 2, color: "#F6C800", borderColor: "#F6C800" }}
              >
                Watch Trailer
              </Button>
            )}
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", mt: 5, mb: 5, width: "30%" }}
            >
              {movie.overview}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Details;
