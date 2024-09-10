import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import InfoIcon from "@mui/icons-material/Info";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";

export const Navigationbar = () => {
  return (
    <div className="navmenu-section">
      <ul>
        <li title="home">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <HomeIcon />
          </NavLink>
        </li>
        <li title="menu">
          <NavLink
            to={"/menu"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <MenuIcon />
          </NavLink>
        </li>
        <li title="search">
          <NavLink
            to={"/search"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <SearchIcon />
          </NavLink>
        </li>
        <li title="chat">
          <NavLink
            to={"/chat"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <ChatBubbleIcon />
          </NavLink>
        </li>
        <li title="about us">
          <NavLink
            to={"/aboutus"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <InfoIcon />
          </NavLink>
        </li>
        <li title="graph">
          <NavLink
            to={"/graph"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <BarChartIcon />
          </NavLink>
        </li>
        <li title="statistics">
          <NavLink
            to={"/statistics"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <TrendingUpIcon />
          </NavLink>
        </li>
        <li title="users">
          <NavLink
            to={"/users"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <GroupsIcon />
          </NavLink>
        </li>
        <li title="settings">
          <NavLink
            to={"/settings"}
            className={({ isActive }) => (isActive ? "active " : "")}
          >
            <SettingsIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
