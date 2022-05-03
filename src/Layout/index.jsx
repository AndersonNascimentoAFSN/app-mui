import React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Layout() {
  const [open, setOpen] = React.useState(false);
  const userInfo = {
    user: "Jon Snow",
    city: "Winterfell",
    photoUser:
      "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2016/06/Jon-Snow.jpg",
  };

  const handleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header userInfo={userInfo} handleDrawer={handleDrawer} />
      <SideBar open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
