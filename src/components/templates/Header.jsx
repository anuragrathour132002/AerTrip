import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { useState } from "react";
import clsx from "classnames";
import { Link } from "react-router-dom";

const navItems = ["Flight", "Hotel", "Visa", "Holidays"];

const Header = () => {
  const [activeTab, setActiveTab] = useState("Flight");

  return (
    <AppBar
      position="sticky"
      className="bg-gradient-to-r from-[#29b0b6] to-[#0cc] shadow-md"
      elevation={1}
    >
      <Toolbar className="flex justify-between h-[54px] px-4 md:px-10">
        {/* Logo Section */}
        <Link to="/">
          <Box className="flex items-center space-x-4 cursor-pointer">
            <img
              src="/aertip-vertical-logo-white.svg"
              alt="Logo Icon"
              className="h-[30px] w-[27px]"
            />
            <img
              src="/aertrip-name-vertical-white.svg"
              alt="Logo Text"
              className="h-4 w-[127px]"
            />
          </Box>
        </Link>

        {/* Nav Items */}
        <Box className="absolute left-1/2 transform -translate-x-1/2">
          <Box component="ul" className="flex gap-10 list-none p-0 m-0">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveTab(item)}
                  className={clsx(
                    "text-white text-xs font-medium uppercase px-4 py-2 rounded-full transition-colors",
                    {
                      "bg-[#1adcbb]": activeTab === item,
                      "hover:bg-white hover:text-[#29b0b6]": activeTab !== item,
                    }
                  )}
                >
                  {item}
                </button>
              </li>
            ))}
          </Box>
        </Box>

        {/* Login Button */}
        <Box>
          <Button
            className="text-white text-xs font-medium px-5"
            onClick={() => alert("Login clicked")}
          >
            LOGIN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
