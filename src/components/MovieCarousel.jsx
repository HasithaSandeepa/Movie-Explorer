import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel"; // Carousel library
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const MovieCarousel = ({ movies }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Grid
              container
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                color: "white",
                width: "100%",
              }}
            >
              {/* Image */}
              <Grid item xs={12} sx={{ position: "relative", width: "100%" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "70vh",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                {/* Movie Information */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "0px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    opacity: 1,
                    transition: "opacity 0.3s",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                    padding: "5rem",
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 900,
                      fontSize: "4rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {movie.title}
                  </Typography>

                  {/* Release date and rating */}
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: "1rem", fontSize: "2rem" }}
                  >
                    {movie.release_date} | Rating: {movie.vote_average}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      fontSize: "1rem",
                      marginBottom: "0.25rem",
                      display: "flex",
                      textAlign: "left",
                      width: "50%",
                    }}
                  >
                    {movie.overview.length > 500
                      ? `${movie.overview.substring(0, 500)}...`
                      : movie.overview}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default MovieCarousel;
