import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsers(data);
    //     setLoading(false);
    //   });
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users/")
    //   .then((response) => {
    //     console.log(response.data);
    //     setUsers(response.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => console.log(err));
    const fechUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fechUsers();
  }, []);
  //   console.log(users);
  if (loading) {
    return <Spinner animation="border" variant="success" />;
  }
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {users && users.map((elm, i) => <UserCard user={elm} key={i} />)}
    </div>
  );
};

export default UserList;
