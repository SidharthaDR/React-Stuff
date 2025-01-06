import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  
  if (!user || (user.userName === '')) return <h1>please login</h1>;

  
  return <h1>Welcome {user.userName}</h1>;

}

export default Profile;
