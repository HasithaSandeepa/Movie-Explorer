import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ThemeToggle from "./ThemeToggle";

// This component is responsible for rendering the header of the application, including the navigation links and search functionality.
const Header = ({ themeMode, toggleTheme }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input and navigate to the search results page
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Store the last search query in localStorage
      localStorage.setItem("lastSearch", searchQuery);
      navigate(`/?query=${searchQuery}`);
    }
  };

  useEffect(() => {
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      // Set the last search query as the default value
      setSearchQuery(lastSearch);
    }
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    padding: "6px 16px",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const activeStyle = {
    borderBottom: "2px solid #F6C800",
    fontWeight: "bold",
    color: "#F6C800",
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black", p: 1, mb: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <Box
          sx={{
            display: "flex",
            gap: 6,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            onClick={() => navigate("/home")}
            sx={{
              cursor: "pointer",
              backgroundColor: "#F6C800",
              color: "black",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            MOVIE EXPLORER
          </Typography>

          <NavLink
            to="/home"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {}),
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {}),
            })}
          >
            Favorites
          </NavLink>
          <NavLink
            to="/top-rated"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {}),
            })}
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/upcoming"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {}),
            })}
          >
            Up Coming
          </NavLink>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #F6C800",
              borderRadius: "20px",
              px: 2,
            }}
          >
            <InputBase
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              sx={{
                color: "#F6C800",
                width: "400px",
              }}
            />
            <IconButton onClick={handleSearch}>
              <SearchIcon sx={{ color: "#F6C800" }} />
            </IconButton>
          </Box>

          <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
