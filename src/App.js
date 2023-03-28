import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import chatPage from "./Pages/chatPage";
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={chatPage} />
    </div>
  );
};

export default App;
