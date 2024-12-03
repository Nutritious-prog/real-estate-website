import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Breadcrumb() {
  return (
    <div className="w-full flex">
      <div
        className=" xl:p-5 p-2 text-center mx-auto xl:mx-0"
        role="presentation"
        onClick={handleClick}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link to="/">
            <div className="flex items-center hover:underline hover:text-[#C28563]">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </div>
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />O Nas
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Breadcrumb;
