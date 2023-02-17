import { AppBar } from "@mui/material";
import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownCircleOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from 'assets/profile.jpeg'

const Navbar = () => {
  return <AppBar></AppBar>;
};

export default Navbar;
