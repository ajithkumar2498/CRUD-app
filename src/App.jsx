import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Create from "./assets/components/Create";
import Edit from "./assets/components/Edit";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
export const Data_URl = "https://65474f42902874dff3ac261f.mockapi.io/New";

function App() {
  return (
    <>
      <div>
        <h2>React CRUD APP</h2>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
