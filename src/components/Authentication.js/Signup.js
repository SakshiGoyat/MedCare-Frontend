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

const Signup = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  // for password toggle button
  const handleClick = () => {
    setShow(!show);
  };

  // for confirm password toggle button
  const handleClick1 = () => {
    setShow1(!show1);
  };

  // to submit the request
  const submitHandler = async () => {
    setloading(true);
    if (!name || !email || !password || !confirmPassword) {
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

    console.log(name, email, password);

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      console.log(2);
      const res = await axios.post(
        "http://localhost:5000/api/user/",
        {
          name,
          email,
          password,
          imageUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(3);
      // send all data from backend.
      // console.log(res);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      console.log(JSON.parse(localStorage.getItem("userInfo")));
      toast({
        title: "Registration successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
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

  // for uploading image
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // functionality of the button to upload the image
  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "Health-app");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwglxcj0m/image/upload",
        formData
      );

      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VStack spacing="5px">
      {/* first name */}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name </FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      {/* email address */}
      <FormControl id="email" isRequired>
        <FormLabel>Email </FormLabel>
        <Input
          placeholder="Enter your Email id"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      {/* password */}
      <FormControl id="password" isRequired>
        <FormLabel>Password </FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* confirmPassword */}
      <FormControl id="confirmPassword" isRequired>
        <FormLabel>Confirm Password </FormLabel>
        <InputGroup>
          <Input
            type={show1 ? "text" : "password"}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick1}>
              {show1 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* pic */}
      <FormControl id="pic">
        <FormLabel>Upload your picture </FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={handleImageChange}
        />
        <Button onClick={handleImageUpload}>Upload Image</Button> 
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
