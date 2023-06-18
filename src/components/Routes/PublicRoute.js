import React from "react";
import { useHistory } from "react-router-dom";

export default function PublicRoute({ children }) {
    console.log(children);
    const history = useHistory();
  if (localStorage.getItem("userInfo")) {
    history.push("/");
    window.location.reload();
  } else {
    return children;
  }
}
