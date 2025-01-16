import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Coffees", path: "/shop" },
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const userLinks = [
  { text: "Login", icon: <IoPersonCircleOutline /> },
  { text: "Search", icon: <RiSearchLine /> },
];

const Navbar = () => {
  const [state, setState] = React.useState({ bottom: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const drawerList = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map(({ name, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton component={NavLink} to={path}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {userLinks.map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-8 lg:px-36 py-4">
        <NavLink to="/" className="font-Syncopate font-medium text-2xl lg:text-3xl text-white">
          BREW HAVEN
        </NavLink>

        <div className="flex gap-4 lg:gap-10">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `font-BarlowCondensed text-lg lg:text-xl cursor-pointer duration-200 uppercase py-2 px-4 ${
                  isActive ? "text-red-600" : "text-white hover:bg-red-600"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-4 lg:gap-10 items-center">
          {userLinks.map(({ text, icon }, index) => (
            <button
              key={index}
              aria-label={text}
              className="flex items-center text-sm lg:text-lg gap-1 text-white hover:text-red-600 duration-200 uppercase"
            >
              {icon}
              {text === "Login" && text}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-2">
        <NavLink to="/" className="font-Syncopate font-medium text-xl text-white">
          BREW HAVEN
        </NavLink>

        <Button aria-label="Open Menu" onClick={toggleDrawer("bottom", true)}>
          <CgMenu className="text-2xl text-white" />
        </Button>
        <Drawer
          anchor="bottom"
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          {drawerList("bottom")}
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
