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
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TimePicker } from "antd";
// import axios, * as others from "axios";
import axios from "axios";
const Signup = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [feePerConsultation, setFeePerConsultation] = useState("");
  const [qualification, setQualification] = useState("");
  const [timings, setTimings] = useState({});
  const [description, setDescription] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem("userInfo")).token);
  // }, []);
  // for password toggle button
  const handleClick = () => {
    setShow(!show);
  };

  const handleTimings = (e) => {
    console.log("timings " + e);
    setTimings(e);
  };
  // for confirm password toggle button
  const handleClick1 = () => {
    setShow1(!show1);
  };

  // const goBack = () => {
  //   history.push("/");
  // };
  // to submit the request
  const submitHandler = async () => {
    setloading(true);
    if (
      !name ||
      !email ||
      !phoneNo ||
      !address ||
      !specialization ||
      !experience ||
      !qualification ||
      !feePerConsultation ||
      !description
    ) {
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
      const res = await axios.post(
        "http://localhost:5000/api/apply-doctor/",
        {
          name,
          email,
          phoneNo,
          website,
          address,
          specialization,
          experience,
          qualification,
          feePerConsultation,
          description,
          imageUrl,
          timings,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userInfo")).token
            }`,
          },
        }
      );
      if (res.data.success === true) {
        localStorage.setItem("doctorInfo", JSON.stringify(res.data.message));
        console.log(JSON.parse(localStorage.getItem("doctorInfo")));
        toast({
          title: "Application successfull",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setloading(false);
        // history.push("/chats");
        history.push("/home");
        // window.location.reload();
      } else {
        toast({
          title: "Error occured.",
          description: res.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setloading(false);
        console.log(res.data.message);
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
      <FormControl id="name" isRequired>
        <FormLabel>Name </FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      {/* email */}
      <FormControl id="email" isRequired>
        <FormLabel>Email </FormLabel>
        <Input
          placeholder="Enter your Email id"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      {/* specialization */}
      <FormControl id="specialization" isRequired>
        <FormLabel>Specialization </FormLabel>
        <Input
          placeholder="Enter your specialization"
          onChange={(e) => setSpecialization(e.target.value)}
        />
      </FormControl>
      {/* experience */}
      <FormControl id="experience" isRequired>
        <FormLabel>Experience </FormLabel>
        <Input
          placeholder="Enter your Experience"
          onChange={(e) => setExperience(e.target.value)}
        />

        {/* qualification */}
      </FormControl>
      <FormControl id="qualification" isRequired>
        <FormLabel>Qualification </FormLabel>
        <Input
          placeholder="Enter your qualification"
          onChange={(e) => setQualification(e.target.value)}
        />
      </FormControl>
      {/* feePerConsulation */}
      <FormControl id="feePerConsulation" isRequired>
        <FormLabel>Fee per Consultation </FormLabel>
        <Input
          placeholder="Enter your fee per consulation"
          onChange={(e) => setFeePerConsultation(e.target.value)}
        />
        {/* phone number */}
      </FormControl>
      <FormControl id="phoneNo" isRequired>
        <FormLabel>Phone number </FormLabel>
        <Input
          placeholder="Enter your phone number"
          onChange={(e) => setPhoneNo(e.target.value)}
        />
      </FormControl>
      {/* address */}
      <FormControl id="address" isRequired>
        <FormLabel>Address </FormLabel>
        <Input
          placeholder="Enter your address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormControl>
      {/* website */}
      <FormControl id="website">
        <FormLabel>Website </FormLabel>
        <Input
          placeholder="Enter your website link"
          onChange={(e) => setWebsite(e.target.value)}
        />
      </FormControl>
      {/* description */}
      <FormControl id="description" isRequired>
        <FormLabel>Description </FormLabel>
        <Input
          placeholder="Enter your Address"
          onChange={(e) => setDescription(e.target.value)}
        />
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

      {/* time picker */}
      <FormControl id="timings">
        <FormLabel>Timings </FormLabel>
        {/* <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        /> */}
        <TimePicker.RangePicker format="HH:mm" onChange={handleTimings} />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Apply doctor
      </Button>
    </VStack>
  );
};

export default Signup;
