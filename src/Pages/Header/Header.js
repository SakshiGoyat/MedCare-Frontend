import React from "react";
import { useColorMode, Flex } from "@chakra-ui/react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { userMenu, adminMenu } from "../../Data/data";
import { Badge, Space } from "antd";

const Header = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";
  // const newUser = useSelector(state => state.user);
  const history = useHistory();
  const location = useLocation();
  const newUser = JSON.parse(localStorage.getItem("userInfo"));
  if (!newUser) {
    history.push("/");
  }

  const headerMenu = newUser?.isSystemAdmin ? adminMenu : userMenu;
  // console.log(newUser);
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
          <img
            src="/images/logoRed.png"
            alt="logo"
            height="50px"
            width="60px"
          />
          <h1>MedCare</h1>
        </div>

        <Flex top="1rem" right="1rem">
          <Flex fontSize="1rem" pt="1rem">
            {headerMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <>
                  <div className={`menu-item ${isActive && "active"}`}>
                    <Flex margin={2} fontSize="1.2rem">
                      <Link to={menu.path}>
                        <h2>{menu.name}</h2>
                      </Link>
                    </Flex>
                  </div>
                </>
              );
            })}
          </Flex>
        </Flex>
        <Flex margin={5} fontSize="1.2rem" padding={2}>
          <Space size="small" style={{ cursor: "pointer" }}>
            <Badge
              count={newUser && newUser.notification.length}
              onClick={() => {
                history.push("/notification");
              }}
            >
              <i class="fa-solid fa-bell fa-xl"></i>
            </Badge>
          </Space>
          <Link to="/profile">
            {"  "}
            <h2 className="userName">{newUser?.name}</h2>
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
