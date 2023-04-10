import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import chatPage from "./Pages/ChatPage/chatPage";
import FrontPage from "./Pages/FrontPage";
import About from "./Pages/About/About";
import Doctors from "./Pages/Doctors/Doctors";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={FrontPage} exact />
      <Route path="/register" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/doctors" component={Doctors} />
      <Route path="/chats" component={chatPage} />
    </div>
  );
};

export default App;
