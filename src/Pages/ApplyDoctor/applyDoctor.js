import React, { useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import ApplyDoctor from "../../components/Authentication.js/ApplyDoctor"
// import { useHistory } from "react-router-dom";

import "./styles.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const applyDoctor = () => {
//   const history = useHistory();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));
//     localStorage.clear();
//     if (user) {
//       history.push("/home");
//     }
//   }, [history]); // removed history.

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
            <TabList mb="1em" ml="10rem">
              <Tab width="50%">Apply as a Doctor</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ApplyDoctor />
              </TabPanel>
              {/* <TabPanel>
                <Signup />
              </TabPanel> */}
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default applyDoctor;
