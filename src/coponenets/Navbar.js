import React from 'react'
import logo from '../images/logoyt.png';
import { Avatar2 } from './Avatar2';
import "./ComponentCss/navbar.css";

import {
  Link
} from "react-router-dom";
export const Navbar = () => {
  return (
   
      
  
      
      
    
      <div className="container-fluid">
        <div className="logoa">
          <Link to="/">
            <img className="logo" src={logo} alt="Youtube" />
          </Link>
        </div>

        <div className="search">
          <form  className="d-flex my-2">
            <input className="form-control me-2"  id="inputsearch" type="search" placeholder="Search" aria-label="Search" />
            <Link to='/searchRes'>
            <button id="search-btn" className="btn btn-outline-success " type="submit">Search</button>
            </Link>
          </form>
        </div>
        <div className="avatar2">
          <Avatar2 className="avatar2" image={logo} username="USERNAME" />
        </div>
      </div>


  
  )
}
