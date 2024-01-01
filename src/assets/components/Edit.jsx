import React from "react";
import { Data_URl } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Edit() {
  const params = useParams();
  const Nav = useNavigate();
  const [Name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
// Handle Edit => Edit the Data and Update using put Method 
  const handleEdit = async () => {
    try {
      let res = await axios.put(
        `${Data_URl}/${params.id} `, {
          Name,
          userName,
          email,
          Phone

        });
        
      if (res.status === 200) {
        alert("Data Updated Successfully");
        Nav("/home");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //HandleEdit Function to display the data in input field using get method from API
  const handleEdit1 = async () => {
    try {
      let res = await axios.get(
        `${Data_URl}/${params.id} `);
      console.log(res);
      setName(res.data.Name)
      setUsername(res.data.Name)
      setEmail(res.data.email)
      setPhone(res.data.Phone)
    } catch (error) {
      console.log(error);
    }
  };
  //call the handleEdit1 Function before Rerendering 
  useEffect(() => {
    handleEdit1()
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={() => handleEdit()}>
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Edit;
