import React from "react";
import Logo from "../assets/LogoNav.png";
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
import { MdInbox, MdMail } from "react-icons/md";

const Navbar = () => {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
        {["Home", "About", "Coffees", "Shop", "Blog", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
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
      <div className="px-36 hidden md:block">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <h1 className="font-Syncopate font-medium text-2xl text-white">
              BREW HAVEN
            </h1>
          </div>
          {/* Navigation Links */}
          <div className="flex gap-10">
            {["Home", "About", "Coffees", "Shop", "Blog", "Contact"].map(
              (text) => (
                <h1
                  key={text}
                  className="font-BarlowCondensed text-2xl cursor-pointer text-white hover:bg-red-600 hover:text-white duration-200 uppercase py-7 px-4"
                >
                  {text}
                </h1>
              )
            )}
          </div>
          {/* Login and Search */}
          <div className="flex gap-10 items-center">
            <button className="flex items-center text-lg gap-1 text-white hover:text-red-600 duration-200 uppercase">
              <IoPersonCircleOutline />
              Login
            </button>
            <button className="text-xl cursor-pointer text-white hover:text-red-600 duration-200">
              <RiSearchLine />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <h1 className="font-Syncopate font-medium text-xl text-white">
            BREW HAVEN
          </h1>
        </div>
        {/* MENU */}
        <div>
          {["bottom"].map((anchor) => (
            <React.Fragment key={anchor}>
              {/* Replace text button with an icon */}
              <Button onClick={toggleDrawer(anchor, true)}>
                <CgMenu className="text-2xl border bg-white w-12 h-8 text-black rounded-md" />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
