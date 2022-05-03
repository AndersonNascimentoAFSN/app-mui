import React, { createRef, useState } from "react";
import {
  Box,
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const DrawerOpen = () => setOpenSidebar(!openSidebar);

  function Logout() {
    console.log("logout");
  }

  const userInfo = {
    user: "Jon Snow",
    city: "Winterfell",
    photoUser: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2016/06/Jon-Snow.jpg",
  };

  const { user, city, photoUser } = userInfo;

  return (
    <Stack>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Stack direction="row" sx={{ flexGrow: 1 }}>
            <IconButton
              onClick={DrawerOpen}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <img alt="logo" src="/images/indicadores-logo-branco.svg" />
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Stack alignItems="flex-end">
              <Typography>{user}</Typography>
              <Typography>{city}</Typography>
            </Stack>
            <Avatar
              className="img-avatar"
              src={photoUser}
              sx={{ width: 56, height: 56 }}
            />
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <Box component="div">
                  <IconButton
                    color="inherit"
                    variant="contained"
                    {...bindTrigger(popupState)}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography
                      sx={{ p: 2, display: "flex", alignItems: "center" }}
                    >
                      <LogoutIcon />
                      Sair
                    </Typography>
                  </Popover>
                </Box>
              )}
            </PopupState>
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  );
}
