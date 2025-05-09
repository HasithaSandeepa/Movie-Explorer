import React, { useEffect, useState } from "react";
import { Grid, Button, Box } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { fetchTrending, searchMovies } from "../services/tmdb";
import { useLocation } from "react-router-dom";
import MovieCarousel from "../components/MovieCarousel";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // For pagination
  const [hasMore, setHasMore] = useState(true); // Track if more movies are available

  const location = useLocation();

  // Function to get the query parameter from the URL
  const getQueryParam = () => {
    const params = new URLSearchParams(location.search);
    return params.get("query") || "";
  };

  // Function to fetch movies based on the current page and query
  const fetchData = async (currentPage, isNewSearch = false) => {
    const query = getQueryParam();
    let res;

    if (query) {
      res = await searchMovies(query, currentPage);
    } else {
      res = await fetchTrending(currentPage);
    }

    const newMovies = res.data.results;
    if (isNewSearch) {
      setMovies(newMovies);
    } else {
      setMovies((prev) => [...prev, ...newMovies]);
    }

    setHasMore(newMovies.length > 0);
  };

  useEffect(() => {
    // Reset when query changes
    setPage(1);
    fetchData(1, true);
  }, [location.search]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  return (
    <div>
      {/* Carousel */}
      <MovieCarousel movies={movies.slice(0, 5)} />

      {/* Movie Grid */}
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {movies.map((movie) => (
          <Grid item xs={6} sm={4} md={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {hasMore && (
        <Box textAlign="center" mt={3}>
          <Button
            variant="outlined"
            onClick={handleLoadMore}
            sx={{
              border: "2px solid #F6C800",
              color: "#F6C800",
              mb: 3,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#F6C800",
                color: "white",
                boxShadow: 5,
              },
            }}
          >
            Load More
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Home;
