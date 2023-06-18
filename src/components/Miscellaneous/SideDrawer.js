// sidedrawer is handling: profile section, search section,
import React, { useState } from "react";
import {
  Box,
  Tooltip,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  DrawerCloseButton,
  useToast,
} from "@chakra-ui/react";
// import NotificationBadge, { Effect } from "react-notification-badge";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaSearch } from "react-icons/fa";
import { ChatState } from "../../Context/chatProvider";
import ProfileModel from "./ProfileModel";
import { useDisclosure } from "@chakra-ui/hooks";
import axios, * as others from "axios";
import Chatloading from "../Chatloading";
import UserListItem from "../userAvatar/userListItem";
import { Spinner } from "@chakra-ui/spinner";
import { getSender } from "../../config/ChatLogics";
import { useHistory } from "react-router-dom";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setloading] = useState(false);
  const [loadingChat, setloadingChat] = useState();

    const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();

  const toast = useToast();

  // logged out user.
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  // to access the chats
  const accessChat = async (userId) => {
    try {
      setloadingChat(true);

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const data = await axios.post(
        "http://localhost:5000/api/chat/",
        { userId },
        config
      );

      console.log(data);
      // chats is an array, find is an function of array and it is checking each element and
      // if the current returned chat is already present in array, it will return true and don't push that chat into chats array.
      
      if (!chats.find((c) => c._id === data._id)) {
        setChats([data, ...chats]);
      }
      
      setSelectedChat(data);
      setloadingChat(false);
      onClose();
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error accessing the chat.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setloading(false);
      console.log(error);
    }
  };

  // to search users
  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please fill something in the the box.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setloading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/user?search=${search}`,
        config
      );

      // console.log(data);
      console.log("searched user " + JSON.stringify(data));
      setloading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error occured.",
        description: "Failed to load the search results.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setloading(false);
      console.log(error);
    }
  };

  return (
    <>
      {/* header box having search section, website name, and profile section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        {/* to search doctor only frontent*/}
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <FaSearch />
            <Text display={{ base: "none", md: "flex" }} p="0.5rem">
              Search Doctor
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="40px" fontFamily="ubuntu">
          MedCare
        </Text>

        <div>
          {/* <Menu>
            <MenuButton p={1}>
              <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              />
              <BellIcon fontSize="2*1" m={1} />
            </MenuButton>
            <MenuList pl={2}>
              {!notification.length ? (
                "No New Messages"
              ) : (
                <>
                  {notification.map((notif) => (
                    <MenuItem
                      key={notif._id}
                      onClick={() => {
                        setSelectedChat(notif.chat);
                        setNotification(
                          notification.filter((n) => n !== notif)
                        );
                      }}
                    >
                      {notif.chat.isGroupChat
                        ? `New Message in ${notif.chat.chatName}`
                        : `New Message from ${getSender(
                            user,
                            notif.chat.users
                          )}`}
                    </MenuItem>
                  ))}
                </>
              )}
            </MenuList>
          </Menu> */}
          {/* user profile */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.image}
              />
            </MenuButton>
            <MenuList>
              <ProfileModel user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModel>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* searching doctor functionality */}
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search doctor by name."
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button mr={-1} colorScheme="blue" onClick={handleSearch}>
                Go
              </Button>
            </Box>
            {loading ? (
              <Chatloading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  // access chat has all error.
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
          </DrawerBody>
          {loadingChat && <Spinner ml="auto" display="flex" />}
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
