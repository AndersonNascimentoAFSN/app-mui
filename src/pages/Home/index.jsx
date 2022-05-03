import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => {
  // console.log(theme);
  return {
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  };
});

export default function Home() {
  return (
    <Container fixed sx={{ height: "100vh" }} maxWidth="xl" component="main">
      <div>Home</div>
      <Grid container spacing={2} rowSpacing={8}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Container>
  );
}
