import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg  border-bottom" style={{backgroundColor:"#FFF"}}>
        <div class="container">
          <Link class="navbar-brand" to="#">
            <img src='media\image\logo.svg' alt='logo' style={{width:"25%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/About"> 
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Product">
                Product  
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/supports">
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="#">
                <i class="fa fa-bars" aria-hidden="true"></i>
                </Link>
              </li>
        
             
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
