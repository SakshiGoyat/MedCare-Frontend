import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./styles.css";
import axios, * as others from "axios";
import { ChatState } from "../../Context/chatProvider";
import { useEffect, useState } from "react";
import { Button, Table } from "antd";

const Doctors = () => {
  const [users, setUsers] = useState([]);
  const { user, setUser } = ChatState();

  const getDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (res.data.success) {
        setUsers(res.data.data);
        console.log(users);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getDoctors();
  // }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone No.",
      dataIndex: "phoneNo",
    },
    {
      title: "Fee",
      dataIndex: "feePerConsultation",
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
    },
    {
      title: "Experience",
      dataIndex: "experience",
    },
    {
      title: "Status",
      dataIndex: "application",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.application === "pending" ? (
            <button className="btn btn-success">Approve</button>
          ) : (
            <button className="btn btn-danger">Reject</button>
          )}
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        <Header />
        <h1 className="h1">Doctors List</h1>
        <Button onClick={getDoctors}>get Doctors</Button>
        <Table columns={columns} dataSource={users} />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Doctors;
