import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { Home } from "./pages";
import { store } from "./store";
import { theme } from "./theme";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
