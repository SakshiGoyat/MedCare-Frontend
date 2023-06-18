import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./styles.css";
import axios, * as others from "axios";
import { ChatState } from "../../Context/chatProvider";
import { useEffect, useState } from "react";
import { Button, Table } from "antd";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { user, setUser } = ChatState();

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getAllUsers", {
        headers: {
          "Content-Type": "application/json",
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
  //   // console.log(user);
  //   getUsers();
  //   // console.log(user.token);
  // }, []);

  // antD table col
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
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },
    {
      title: "Admin",
      dataIndex: "isSystemAdmin",
      render: (text, record) => <span>{record.isSystemAdmin ? "Yes" : "No"}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button className="btn btn-danger">Block</button>
        </div>
      ),
    },
  ];

  return (
    <div className="main">
      <div>
        <Header />
        <h1 className="h1">Users List</h1>
        <Button onClick={getUsers}>Get Users</Button>
        <Table columns={columns} dataSource={users} />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Users;
