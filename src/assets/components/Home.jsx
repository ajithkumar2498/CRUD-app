import React, { useEffect, useState } from "react";
import { Data_URl } from "../../App";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function Home() {
  let Nav = useNavigate();
  const [rowdata, setRowdata] = useState([]);
  const getData = async () => {
    try {
      const result = await axios.get(Data_URl);
      setRowdata(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // handleDelete => delete the existing data from Mock api
  const handleDelete = async (e) => {
    try {
      let result = await axios.delete(`${Data_URl}/${e.id}`);
      console.log(result.data);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
 // display the data from mockapi in table 
  return (
    <>
      <div className="container-fluid"></div>
     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">Full Name</th>
            <th className="text-center">S.no</th>
            <th className="text-center">User Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rowdata.map((e) => {
            return (
              <tr key={e.id}>
                <td className="text-center">{e.id}</td>
                <td className="text-center">{e.Name}</td>
                <td className="text-center">{e.userName}</td>
                <td className="text-center">{e.email}</td>
                <td className="text-center">{e.Phone}</td>
                <td>
                  <i
                    className="fa-solid fa-trash pointer"
                    onClick={() => handleDelete(e)}
                  ></i>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <i
                    className="fa-regular fa-pen-to-square pointer"
                    onClick={() => Nav(`/edit/${e.id}`)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
