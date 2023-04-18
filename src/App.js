import React from "react";
import { Route } from "react-router-dom";
import RegistrationP from "./Pages/HomePage/RegistrationP";
import chatPage from "./Pages/ChatPage/chatPage";
import FrontPage from "./Pages/FrontPage/FrontPage";
import About from "./Pages/About/About";
import Doctors from "./Pages/Doctors/Doctors";
import "./App.css";
import RegistrationD from "./Pages/HomePage/RegistrationD";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={FrontPage} exact />
      <Route path="/registerP" component={RegistrationP} />
      <Route path="/registerD" component={RegistrationD} />
      <Route path="/about" component={About} />
      <Route path="/doctors" component={Doctors} />
      <Route path="/chats" component={chatPage} />
    </div>
  );
};

export default App;
