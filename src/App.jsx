// -----------------------------
// App.jsx
import React, { useState, useMemo } from "react";
import AppRouter from "./router/AppRouter";
import { CssBaseline, ThemeProvider, Container, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header themeMode={themeMode} toggleTheme={toggleTheme} />
      <Box>
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
};

export default App;
