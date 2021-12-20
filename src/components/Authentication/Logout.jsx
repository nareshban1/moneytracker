import React from "react";
import { useAuth } from "../../context/authContext";
import { LogoutButton } from "./AuthenticationStyles";
const Logout = () => {
  const { logout } = useAuth();
  const logoutuser = async () => {
    await logout();
  };

  return <LogoutButton onClick={logoutuser}>Log Out</LogoutButton>;
};

export default Logout;
