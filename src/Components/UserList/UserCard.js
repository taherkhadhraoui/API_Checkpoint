import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Title>{user.website}</Card.Title>
          <Card.Title>{user.email}</Card.Title>

          <Link to={`/details/${user.id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
