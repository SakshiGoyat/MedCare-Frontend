import "antd/dist/reset.css";
import React from "react";
import { Route } from "react-router-dom";
import RegistrationP from "./Pages/RegistrationPage/RegistrationP";
import chatPage from "./Pages/ChatPage/chatPage";
import FrontPage from "./Pages/FrontPage/FrontPage";
import About from "./Pages/About/About";
// import Doctors from "./Pages/Doctors/Doctors";
import "./App.css";
import RegistrationD from "./Pages/RegistrationPage/RegistrationD";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import applyDoctor from "./Pages/ApplyDoctor/applyDoctor"
import notification from "./Pages/Notification/notification";
import Users from "./Pages/Admin/Users";
import Doctors from "./Pages/Admin/Doctors";
const App = () => {
  return (
    <div className="App">
      <Route path="/home" component={FrontPage} />
      <Route
        path="/"
        // render={() => (
        //   <ProtectedRoute>
        //     <RegistrationP />
        //   </ProtectedRoute>
        // )}
        component={RegistrationP}
        exact
      />
      <Route path="/registerD" component={RegistrationD} />
      <Route path="/apply-doctor" component={applyDoctor} />
      <Route path="/about" component={About} />
      <Route path="/notification" component={notification} />
      <Route
        path="/admin/doctors"
        // render={() => (
        //   <ProtectedRoute>
        //     <Doctors />
        //   </ProtectedRoute>
        // )}
        component={Doctors}
      />
      <Route
        path="/admin/users"
        // render={() => (
        //   <ProtectedRoute>
        //     <Doctors />
        //   </ProtectedRoute>
        // )}
        component={Users}
      />
      <Route path="/chats" component={chatPage} />
    </div>
  );
};
export default App;
