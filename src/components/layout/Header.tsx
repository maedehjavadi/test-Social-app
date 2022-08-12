import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../hooks/useActiveTheme";

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width={852}
      >
        <Box component="span">
          <Typography variant="h6" color="primary">
            User settings{theme.palette.mode}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="text" size="small">
              <Typography color="primary">English</Typography>
            </Button>
            <Button variant="text" size="small">
              <Typography color="primary">فارسی</Typography>
            </Button>
          </Stack>
          <Box component="div">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon color="primary" />
              ) : (
                <WbSunnyIcon color="secondary" />
              )}
            </IconButton>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Header;

// const [themeStatus, setThemeStatus] = useState("dark");
// useEffect(() => {
//   localStorage.setItem("theme", themeStatus);
//   if (themeStatus === "dark") {
//     document.body.classList.remove("lightTheme");
//     document.body.classList.add("darkTheme");
//   } else {
//     document.body.classList.remove("darkTheme");
//     document.body.classList.add("lightTheme");
//   }
// }, [themeStatus]);
// useEffect(() => {
//   localStorage.getItem("theme");
// }, [themeStatus]);
