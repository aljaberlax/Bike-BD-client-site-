import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
