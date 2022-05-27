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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
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
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReviews></AddReviews>}></Route>
          <Route path="myprofile" element={<MyProfiile></MyProfiile>}></Route>
        </Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
