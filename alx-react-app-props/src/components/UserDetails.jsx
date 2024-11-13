import React, { useContext } from "react";
import Context from "../UserContext";

const UserDetails = () => {
  const userData = useContext(Context);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserDetails;
