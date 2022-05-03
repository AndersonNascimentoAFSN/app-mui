import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupsIcon from "@mui/icons-material/Groups";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  // marginTop: 64,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  // marginTop: 64,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function ListItemLink({
  icon,
  primary,
  to,
  handleClick,
  selected,
  ...otherProps
}) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItemButton
        component={renderLink}
        onClick={handleClick}
        selected={selected}
        {...otherProps}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItemButton>
    </li>
  );
}
const LinksTo = [
  { to: "/", name: "Página Inicial", icon: <HomeIcon /> },
  { to: "/collaborators", name: "Colaboradores", icon: <GroupsIcon /> },
];

export default function SideBar({ open }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => setSelectedIndex(index);
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader />
      <List>
        {LinksTo.map(({ to, name, icon }, index) => (
          <ListItemLink
            key={`${name}-${index}`}
            to={to}
            primary={name}
            icon={icon}
            handleClick={() => handleListItemClick(index)}
            selected={selectedIndex === index}
          />
        ))}
      </List>
    </Drawer>
  );
}
