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
import { useHistory } from "react-router-dom";
import axios, * as others from "axios";

const Signin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => {
    setShow(!show);
  };

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
      const data = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        },
        config
      );
      toast({
        title: "Logged in successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));

      setloading(false);
      history.push("/chats");
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
      </VStack>
    </div>
  );
};

export default Signin;
