import React from "react";
import {
  Container,
  // Grid,
  // Box,
  // Avatar,
  Typography,
  // Stack,
  // Paper,
} from "@mui/material";
// import { deepOrange } from "@mui/material/colors";
// import CakeIcon from "@mui/icons-material/Cake";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import EmailIcon from "@mui/icons-material/Email";
// import SmartphoneIcon from "@mui/icons-material/Smartphone";

export default function Characters() {
  return (
    <Container
      fixed
      sx={{ minHeight: "calc(100vh - 100px)" }}
      maxWidth="xl"
      // component="main"
      // component={Paper}
      elevation={1}
    >
     <Typography>Characters Page</Typography>
    </Container>
  );
}
