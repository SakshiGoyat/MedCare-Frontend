import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/chatProvider";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/Miscellaneous/SideDrawer";

const ChatPage = () => {
  // getting user data
  const { user } = ChatState();
  const [fetchAgain, setfetchAgain] = useState(false);
  // console.log("user details: ",user);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && (
          <MyChats fetchAgain={fetchAgain}  />
        )}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setfetchAgain={setfetchAgain} />
        )}
      </Box>
      {/* hello */}
    </div>
  );
};

export default ChatPage;
