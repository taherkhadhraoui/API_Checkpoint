import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .then((res) => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {loading ? (
        "In progress"
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Title>{user.address.city}</Card.Title>
            <Card.Title>{user.address.zipcode}</Card.Title>

            <Card.Text>{user.company.name}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Details;
