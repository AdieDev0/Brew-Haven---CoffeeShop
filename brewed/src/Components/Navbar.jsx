import React from "react";
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

const Navbar = () => {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About", "Coffees", "Shop", "Blog", "Contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Login", "Search"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <IoPersonCircleOutline /> : <RiSearchLine />}
              </ListItemIcon>
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
        {/* Logo */}
        <h1 className="font-Syncopate font-medium text-2xl lg:text-3xl text-white">
          BREW HAVEN
        </h1>
        {/* Navigation Links */}
        <div className="flex gap-4 lg:gap-10">
          {["Home", "About", "Coffees", "Shop", "Blog", "Contact"].map((text) => (
            <h1
              key={text}
              className="font-BarlowCondensed text-lg lg:text-xl cursor-pointer text-white hover:bg-red-600 hover:text-white duration-200 uppercase py-2 px-4"
            >
              {text}
            </h1>
          ))}
        </div>
        {/* Login and Search */}
        <div className="flex gap-4 lg:gap-10 items-center">
          <button className="flex items-center text-sm lg:text-lg gap-1 text-white hover:text-red-600 duration-200 uppercase">
            <IoPersonCircleOutline/>
            Login
          </button>
          <button className="text-lg lg:text-xl cursor-pointer text-white hover:text-red-600 duration-200">
            <RiSearchLine />
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-2">
        {/* Logo */}
        <h1 className="font-Syncopate font-medium text-xl text-white">
          BREW HAVEN
        </h1>
        {/* Menu */}
        <Button onClick={toggleDrawer("bottom", true)}>
          <CgMenu className="text-2xl text-white" />
        </Button>
        <Drawer
          anchor="bottom"
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          {list("bottom")}
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
