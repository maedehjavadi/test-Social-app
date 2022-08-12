import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

interface IThemeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}
export const ColorModeContext = createContext({} as IThemeContext);
const useActiveTheme = () => {
  const getDesignTokens = (mode: "light" | "dark") => ({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
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
          }
        : {
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
          }),
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

  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
        if (mode === "dark") {
          document.body.classList.add("lightTheme");
          document.body.classList.remove("darkTheme");
        } else {
          document.body.classList.add("darkTheme");
          document.body.classList.remove("lightTheme");
        }
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode) as any),
    [mode]
  );
  //   const [activeTheme, setActiveTheme] = useState<any>(theme);
  //   const [activeMode, setActiveMode] = useState<string>("dark");
  //   const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  //   useEffect(() => {
  //     // if (typeof window !== "undefined") {
  //     //   // Perform localStorage action
  //     //   // const item = localStorage.getItem('key')
  //     // }
  //     setActiveMode(localStorage.getItem("theme") as string);
  //     if (mode === "dark") {
  //       //   setActiveTheme(theme);
  //       setIsDarkMode(true);
  //     } else if (mode === "light") {
  //       //   setActiveTheme(themeLight);
  //       setIsDarkMode(false);
  //     }
  //   }, [activeMode, mode]);

  return { ColorModeContext, colorMode, theme };
};

export default useActiveTheme;
