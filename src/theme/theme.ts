import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    action: {
      disabledBackground: "#ffffff1f",
      disabled: "#ffffff4d",
    },
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#e39d34",
    },
    disabled: {
      main: "#4c545f",
    },
    error: {
      main: "#d5443b",
    },
    warning: {
      main: "#ffa82e",
    },
    background: {
      primary: "#3e4751",
      secondary: "#343d48",
      main: "#212b35",
    },
  },
  // direction: "rtl",
  typography: {
    h6: {
      fontWeight: 500,
      fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
      fontSize: "1.07143rem",
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "0.850rem",
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
    },
    caption: {
      fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "0.642857rem",
      lineHeight: 1.66,
    },
    subtitle2: {
      fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: 1.57,
    },
    button: {
      fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
      fontWeight: 500,
      fontSize: "0.696429rem",
      lineHeight: 1.75,
      textTransform: "uppercase",
    },
  },
});
export default theme;
