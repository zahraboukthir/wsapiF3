import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <span className="profil">{user.name[0]}</span>
        {/* <Card.Img
          top
          width="100%"
          src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
          alt="Card image cap"
        /> */}
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Link to={`/details/${user.id}`}>
            <Button variant="primary">More Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
