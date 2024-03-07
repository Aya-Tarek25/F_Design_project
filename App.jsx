// import { useState } from 'react'
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Nav from "./Components/Nav/Nav";
import ShowProjects from './Components/Projects/ShowProjects'
import Auth from "./Components/Auth";
import Home from './Components/Home/Home';
import Contact  from "./Components/Contact/Contact";
import './App.css'
import { Routes,Route } from "react-router-dom";
import User from "./Components/User/UserProfile";
import Gallary from "./Components/User/Gallary";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddProject from './Components/Projects/AddProject/AddProject';
import Portfolio from './Components/User/DesignerProfile/Portfolio';
import ItemDetails from "./Components/User/DesignerProfile/PortoflioItem/ItemDetails";
import PortfolioItem from "./Components/User/DesignerProfile/PortoflioItem/PortfolioItem";
function App() {
  
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2RkYzJiYjNhMmE4OWE2MmM3MGNjMCIsInJvbGUiOiJVc2VyIiwic3RhdHVzIjoib25saW5lIiwiaWF0IjoxNzA5NzI4NDc1LCJleHAiOjE3MDk4MTQ4NzV9.nyGB32M1p8lgGAZNTM0QsTd5zEX7-tusX3lSV2kHeis'
  localStorage.setItem('token',token)
  return (
     <React.Fragment>
       <Nav/>
       
      {/* <UserProfile/> */}
       <Routes>
      {/* <Route element={<Auth />}> */}
      <Route path="/home" element={<Home />} />
      <Route path="/showprojects" element={<ShowProjects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/designerprofile/*" element={<User />} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/addproject" element={<AddProject />} />
      <Route path="/itemdetails/:id" element={<PortfolioItem  />} />
        {/* </Route> */}
        </Routes> 
    {/* <Contact/> */}
  
    {/* <User/> */}
    
     </React.Fragment>
  )
}

export default App
