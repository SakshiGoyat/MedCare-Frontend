import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const history = useHistory();
  const toast = useToast();

  // const goBack = () => {
  //   history.push("/");
  // };
  // to show and hide password
  const handleClick = () => {
    setShow(!show);
  };

  // to submit the sign in
  const submitHandler = async () => {
    setloading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        },
        config
      );

      if (res.data.success === false) {
        toast({
          title: "Error occured.",
          description: res.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setloading(false);
        // window.location.reload();
        console.log(res.data.message);
        return;
      } else {
        localStorage.setItem("userInfo", JSON.stringify(res.data.message));
        toast({
          title: "Logged in successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });

        setloading(false);
        // history.push("/chats");
        history.push("/home");
        // window.location.reload();
      }
    } catch (error) {
      toast({
        title: "Error occured.",
        description: error.response,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <VStack spacing="5px">
        {/* email address */}
        <FormControl id="emailL" isRequired>
          <FormLabel>Email </FormLabel>
          <Input
            placeholder="Enter your Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        {/* password */}
        <FormControl id="passwordL" isRequired>
          <FormLabel>Password </FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          isLoading={loading}
        >
          Sign in
        </Button>
        <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
          }}
        >
          Get Guest User Credentials
        </Button>
        {/* <Button
          // variant="solid"
          // colorScheme="blue"
          color="grey"
          width="100%"
          onClick={goBack}
        >
          Go Back
        </Button> */}
      </VStack>
    </div>
  );
};

export default Signin;
