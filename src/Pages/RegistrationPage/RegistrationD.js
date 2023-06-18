import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Signup from "../../components/Authentication.js/SignupD";
import Signin from "../../components/Authentication.js/SigninD";
import { useHistory } from "react-router-dom";

import "./styles.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const RegistrationD = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      history.push("/chats");
    }
  }, [history]); // removed history.

  return (
    <div className="container1">
    <Header />
      <Container maxW="xl" centerContent className="container2">
        <Box
          d="flex"
          justifyContent="center"
          textAlign="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          {/* home page website name */}
          <Text fontSize="4xl" fontFamily="Montserrat" color="black">
            MedCare
          </Text>
        </Box>

        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded">
            <TabList mb="1em">
              <Tab width="50%">Sign in</Tab>
              <Tab width="50%">Sign up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Signin />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default RegistrationD;
