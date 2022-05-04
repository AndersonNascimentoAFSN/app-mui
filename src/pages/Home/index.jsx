import React from "react";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      fixed
      sx={{ minHeight: "100vh - 48px" }}
      maxWidth="xl"
      component="main"
    >
      <div>Home Page</div>
    </Container>
  );
}
