import { createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    mode: "light",
    action: {
      disabledBackground: "#D6D8DA",
      disabled: "#9FA0B4",
    },
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#e39d34",
    },
    error: {
      main: "#d5443b",
    },
    disabled: {
      main: "#343d48",
    },
    warning: {
      main: "#ffa82e",
    },
    background: {
      primary: "#fff",
      secondary: "#F4F6F8",
      main: "#fff",
    },
  },
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
export default themeLight;
