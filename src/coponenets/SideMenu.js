import React from 'react'
import "./ComponentCss/sidemenu.css";
import { Link } from 'react-router-dom';
export const SideMenu = () => {
    return (
        <div>
        <div className="flex-shrink-0 p-3  bg-dark " id="sidemenu"  style={{width:'20vw' }}>
   
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <Link to='/'>
        <button className="btn btn-toggle sidemenu-butt align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
        <i className="fas fa-home"/> Home 
        </button>
        </Link>
        
      </li>
      <li className="mb-1">
        <Link to="/explorefeed">
        <button className="btn btn-toggle sidemenu-butt align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
        <i className="fas fa-compass"/> Explore
        </button>
        </Link>
       
      </li>
      <li className="mb-1">
        <Link to="/subscriptions">
        <button className="btn btn-toggle sidemenu-butt align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
        <i className="fas fa-plus-square"/> Subscription
        </button>
        </Link>
        
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle sidemenu-butt align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
        <i className="fas fa-user-alt"/> Account
        </button>
        <div className="collapse" id="account-collapse"  >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="/" className="link-dark rounded">New...</a></li>
            <li><a href="/" className="link-dark rounded">Profile</a></li>
            <li><a href="/" className="link-dark rounded">Settings</a></li>
            <li><a href="/" className="link-dark rounded">Sign out</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
        </div>
    )
}
