import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          // divider: amber[200],
          background: {
            default: "#fff",
          },
          text: {
            primary: "#000",
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: "#dddddd",
          background: {
            default: "#000",
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;
