// App.jsx
import React, { useState, useMemo } from "react";
import AppRouter from "./router/AppRouter";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");
  const location = useLocation();

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

  const hideHeaderPaths = ["/"];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!hideHeaderPaths.includes(location.pathname) && (
        <Header themeMode={themeMode} toggleTheme={toggleTheme} />
      )}
      <Box>
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
};

export default App;
