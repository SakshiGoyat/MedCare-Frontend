import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./styles.css";
import { Tabs, message } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ChatState } from "../../Context/chatProvider";

const Notification = () => {
  const history = useHistory();
  const { user, setUser } = ChatState();
  const { currUser, setCurrUser } = ChatState();

  const handleMarkAllRead = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/get-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
        localStorage.setItem("notificationInfo", JSON.stringify(res.data.data));
        setCurrUser(JSON.parse(localStorage.getItem("notificationInfo")));
        console.log(currUser);
        // window.location.reload();
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong.");
    }
  };

  const handleDeleteAll = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/delete-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
        localStorage.setItem("notificationInfo", JSON.stringify(res.data.data));
        setCurrUser(JSON.parse(localStorage.getItem("notificationInfo")));
        // window.location.reload();
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong.");
    }
  };

  // useEffect(() => {
  //   // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //   // setCurrUser(userInfo);

  //   // if(!userInfo){
  //   //   console.log("hiiii");
  //   // }
  //   // console.log(JSON.parse(localStorage.getItem("userInfo")));
  //   console.log("User " + user);
  //   console.log("currUser " + currUser);
  //   // // if (currUser === undefined) {
  //   // //   window.location.reload();
  //   // // }
  // }, []);
  return (
    <>
      <Header />
      <h1 className="h1">Notification Page</h1>
      <div className="tabs">
        <Tabs>
          <Tabs.TabPane tab="Unread" key={0}>
            <div className="d-flex justify-content-end p-10">
              <h3
                className="p-2"
                onClick={handleMarkAllRead}
                style={{ cursor: "pointer" }}
              >
                Mark All Read
              </h3>
            </div>
            <div>
              {currUser?.notification.map((notificationMsg) => (
                <div className="card" style={{ cursor: "pointer" }}>
                  <div
                    className="card-text"
                    onClick={() => history.push(notificationMsg.onClickPath)}
                  >
                    {notificationMsg.message}
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Read" key={1}>
            <div className="d-flex justify-content-end p-10">
              <h3
                className="p-2"
                onClick={handleDeleteAll}
                style={{ cursor: "pointer" }}
              >
                Delete All
              </h3>
            </div>
            <div>
              {currUser?.seenNotification.map((notificationMsg) => (
                <div className="card" style={{ cursor: "pointer" }}>
                  <div
                    className="card-text"
                    onClick={() => history.push(notificationMsg.onClickPath)}
                  >
                    {notificationMsg.message}
                  </div>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>

      <div className="notificationFooter">
        <Footer />
      </div>
    </>
  );
};

export default Notification;
