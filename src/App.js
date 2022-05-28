import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AllParts from "./AllParts/AllParts";
import Blogs from "./Home/Blogs/Blogs";
import ContactUs from "./Home/ContactUs";
import AddReviews from "./Home/DashBoard/AddReviews";
import DashBoard from "./Home/DashBoard/DashBoard";
import MyOrders from "./Home/DashBoard/MyOrders";
import MyProfile from "./Home/DashBoard/MyProfile";
import Home from "./Home/Home";
import NotFound from "./Home/NotFound/NotFound";
import PcBuyingGuide from "./Home/PcBuyingGuide/PcBuyingGuide";
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
        <Route path="/guide" element={<PcBuyingGuide></PcBuyingGuide>}></Route>
        <Route path="/allparts" element={<AllParts></AllParts>}></Route>
        <Route path='/parts/:productId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/dashboard" element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReviews></AddReviews>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
