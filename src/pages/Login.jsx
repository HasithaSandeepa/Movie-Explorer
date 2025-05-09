import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  useTheme,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "user" && password === "User123@") {
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=1500&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
          zIndex: 1,
        },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          zIndex: 2,
          p: 4,
          width: "90%",
          maxWidth: 400,
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(30, 30, 30, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
          color="text.primary"
        >
          Login to Your Account
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" fontSize={14} mt={1}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              fontWeight: "bold",
              backgroundColor: "#F6C800",
              color: "#000",
              "&:hover": {
                backgroundColor: "#e6b800",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
