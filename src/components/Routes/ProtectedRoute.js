import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showLoading } from "../../redux/features/alertSlice";
import { useEffect } from "react";
import { setUser } from "../../redux/features/userSlice";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      // dispatch(showLoading());

      const userfound = await JSON.parse(localStorage.getItem("userInfo"));
      console.log(1);
      console.log(userfound);
      if (userfound) {
        dispatch(setUser(userfound));
      } else {
        localStorage.clear();
        history.push("/");
      }
    } catch (error) {
      // dispatch(hideLoading());
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      history.push("/");
    }
  }, [user, getUser]);

  if (localStorage.getItem("userInfo")) {
    return children;
  } else {
    history.push("/registerP");
    // window.location.reload();
  }
}
