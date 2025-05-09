// components/MovieCard.jsx
import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  CardActionArea,
  Rating,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { MovieContext } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useContext(MovieContext);
  const favorite = isFavorite(movie.id);

  return (
    <Card
      sx={{
        position: "relative",
        height: 360,
        width: "100%",
        overflow: "hidden",
        borderRadius: 2,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea
        sx={{ height: "100%" }}
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <CardMedia
          component="img"
          height="360"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          sx={{ objectFit: "cover" }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            color: "white",
            opacity: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            textAlign: "left",
            p: 2,
            transition: "opacity 0.3s ease",
            fontSize: "1rem",
            fontWeight: 900,
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: "1rem", fontWeight: 600 }}
            gutterBottom
          >
            {movie.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
              fontSize: "0.75rem",
            }}
          >
            <Typography variant="body2">
              {movie.release_date?.split("-")[0]}
            </Typography>
            <Typography variant="body2">
              Rating: {movie.vote_average}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.75rem",
              fontWeight: 500,
              mb: "20px",
              fontStyle: "italic",
            }}
            gutterBottom
          >
            {movie.overview?.substring(0, 100)}...
          </Typography>
        </Box>

        {/* Rating Badge */}
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            right: 8,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: 1,
            px: 1,
          }}
        >
          <Rating
            name="read-only"
            value={movie.vote_average / 2}
            precision={0.5}
            readOnly
            sx={{
              color: "#F6C800",
              "& .MuiRating-iconEmpty": {
                color: "white",
              },
            }}
          />
        </Box>
      </CardActionArea>

      {/* Favorite Button */}
      <IconButton
        onClick={() => toggleFavorite(movie)}
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          backgroundColor: "rgba(0,0,0,0.6)",
          color: favorite ? "#F6C800" : "white",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}
      >
        {favorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
};

export default MovieCard;
