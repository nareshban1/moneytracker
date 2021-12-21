import React from "react";
import { useAuth } from "../../context/authContext";
import Logout from "../../components/Authentication/Logout";

import {
  UserProfileContainer,
  UserImage,
  UserName,
  UserHeader,
} from "./UserInfoStyles";

const UserInfo = () => {
  const { currentUser } = useAuth();
  return (
    <UserHeader>
      <UserProfileContainer>
        <UserImage
          src={currentUser?.photoURL}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = process.env.PUBLIC_URL + "/default.png";
          }}
        />
        <UserName>{currentUser?.displayName}</UserName>
      </UserProfileContainer>
      <Logout />
    </UserHeader>
  );
};

export default UserInfo;
