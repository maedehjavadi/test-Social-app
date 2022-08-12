import { Box, Container, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};
const Layout = (props: Props) => {
  const { children } = props;

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: 4,
        mt: 5,
      }}
    >
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
