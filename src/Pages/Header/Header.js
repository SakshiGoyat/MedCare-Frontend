import React from "react";
import {
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";
  return (
    <div className="header">
      <Flex
        position="fixed"
        backgroundColor="rgb(233,243,246)"
        width="100%"
        justifyContent="space-between"
        pr="8rem"
        pl="8rem"
      >
        <div className="logo">
          <img src="/images/logoRed.png" alt="logo" height="50px" width="60px" />
          <h1>MedCare</h1>
        </div>

        <Flex top="1rem" right="1rem">
          <Flex fontSize="1rem" pt="1rem">
            <Link to={"/"} className="homePageLinks">
              <h2>Home</h2>
            </Link>
            <Link to={"/about"} className="homePageLinks">
              <h2>About</h2>
            </Link>
            <Link to={"/doctors"} className="homePageLinks">
              <h2>Our Doctors</h2>
            </Link>
            <Link to={"/signd"} className="homePageLinks">
              <h2>Doctor Registration</h2>
            </Link>
            <Link to={"/signp"} className="homePageLinks">
              <h2>Patient Registration</h2>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
