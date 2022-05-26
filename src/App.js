import { Route, Routes } from "react-router-dom";
import AllParts from "./AllParts/AllParts";
import Home from "./Home/Home";
import Purchase from "./Purchase/Purchase";
import Footer from "./Shared/Footer";
import Login from "./Shared/Login";
import Navbar from "./Shared/Navbar";
import Register from "./Shared/Register";
import RequireAuth from "./Shared/RequireAuth";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/allparts" element={<AllParts></AllParts>}></Route>
        <Route path='/parts/:productId' element={<Purchase></Purchase>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
