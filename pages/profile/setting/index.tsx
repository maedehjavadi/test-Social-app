import { ThemeProvider } from "@mui/material/styles";
import type { NextPage } from "next";
import Layout from "../../../src/components/layout/Layout";
import useActiveTheme from "../../../src/hooks/useActiveTheme";
import Main from "../../../src/sections/userSetting/Main";
// import { IntlProvider } from "react-intl";

// const locale = navigator.language;
const Home: NextPage = () => {
  const { ColorModeContext, colorMode, theme } = useActiveTheme();

  return (
    // <IntlProvider locale={locale}>
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Main />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
    // </IntlProvider>
  );
};

export default Home;
