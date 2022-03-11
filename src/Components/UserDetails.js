import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState({});
  let params = useParams();
  console.log(params);
  useEffect(() => {
    const fechUsers = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fechUsers();
  }, [params]);
  const { name } = user;
  return <div>{name}</div>;
};

export default UserDetails;
