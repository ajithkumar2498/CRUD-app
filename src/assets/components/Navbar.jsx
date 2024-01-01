import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link onClick={() => navigate("/home")}>
            <i className="fa-solid fa-house"></i> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => navigate("/create")}>
            {" "}
            <i className="fa-solid fa-plus"></i> Create
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
        <Nav.Link onClick={()=> navigate('/edit')}> <i className="fa-regular fa-pen-to-square"></i> Edit</Nav.Link> 
      </Nav.Item> */}
      </Nav>
    </>
  );
}

export default Navbar;
