import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {
  Box,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  marginBottom: 64,
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header({ handleDrawer, userInfo }) {
  const { user, city, photoUser } = userInfo;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Stack direction="row" sx={{ flexGrow: 1 }}>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img alt="logo" src="/images/got.svg" width="90px" height="48px" />
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
  );
}
