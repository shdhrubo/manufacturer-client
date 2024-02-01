import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bookings from "./components/Bookings/Orders";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RequireAuth from "./components/Login/RequireAuth";
import SignUp from "./components/Login/SignUp";
import NotFound from "./components/NotFound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrders from "./components/Dashboard/MyOrders";
import AddReviews from "./components/Dashboard/AddReviews";
import MyProfiile from "./components/Dashboard/MyProfiile";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import AddProducts from "./components/Dashboard/AddProducts";
import ManageProducts from "./components/Dashboard/ManageProducts";
import ManageOrders from "./components/Dashboard/ManageOrders";
import RequireAdmin from "./components/Login/RequireAdmin";
import Payment from "./components/Dashboard/Payment";
import Blog from "./components/Blog/Blog";
import RequireUser from "./components/Login/RequireUser";
import About from "./components/About/About";
import AllReviews from "./components/AllReviews/AllReviews";
import Sells from "./components/Sells/Sells";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/reviews" element={<AllReviews></AllReviews>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/sells" element={<Sells></Sells>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route
            path="/orders/:id"
            element={
              <RequireAuth>
                <Bookings></Bookings>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route
              path="myorders"
              element={
                <RequireUser>
                  <MyOrders></MyOrders>
                </RequireUser>
              }
            ></Route>
            <Route
              path="addreview"
              element={
                <RequireUser>
                  <AddReviews></AddReviews>
                </RequireUser>
              }
            ></Route>
            <Route path="myprofile" element={<MyProfiile></MyProfiile>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route
              path="makeadmin"
              element={
                <RequireAdmin>
                  <MakeAdmin></MakeAdmin>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addproducts"
              element={
                <RequireAdmin>
                  <AddProducts></AddProducts>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageproducts"
              element={
                <RequireAdmin>
                  <ManageProducts></ManageProducts>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageorders"
              element={
                <RequireAdmin>
                  <ManageOrders></ManageOrders>
                </RequireAdmin>
              }
            ></Route>
          </Route>
        </Routes>
      </ScrollToTop>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
