import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Admin from "./Components/Auth/Admin";

import { Auth } from "./Components/Auth/Auth";
import Booking from "./Components/Bookings/Booking";

import Header from "./Components/Header";
import AddMovie from "./Components/Movies/AddMovie";

import { Movies } from "./Components/Movies/Movies";

import { HomePage } from "./HomePage";
import { adminActions, userActions } from "./store";
function App() {
  const dispatch =useDispatch()
  const isAdminLoggedIn =useSelector((state)=> state.admin.isLoggedIn)
  const isUserLoggedIn =useSelector((state)=> state.user.isLoggedIn)
  console.log("isAdminLoggedIn",isAdminLoggedIn)
  console.log("isUserLoggedIn",isUserLoggedIn)
  useEffect(() => {
    if(localStorage.getItem("userId"))
    {
dispatch(userActions.login())
    }else if(localStorage.getItem("adminId")){
dispatch(adminActions.login())
 }
 },[]);
  
  return (
    <div>
      <Header />
      <section>
        <Routes>
        <Route path="/booking/:id" element={<Booking />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/"
          redirects ="/home"
          element={<HomePage />} />
         
          <Route path="/movies" element={<Movies />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<AddMovie />} />
        
        </Routes>
      </section>
    </div>
  );
}

export default App;
