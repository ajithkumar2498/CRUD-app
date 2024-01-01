import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Data_URl } from "../../App";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
 // handle create function => Create a new data using Post method
  const handleCreate = async () => {
    try {
      let res = await axios.post(Data_URl, {
        Name,
        userName,
        email,
        Phone,
      });
      if (res.status === 201) {
        alert("Data Created Sucessfully");
        navigate("/home");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="User Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={() => handleCreate()}>
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Create;
