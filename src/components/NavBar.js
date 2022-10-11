import React from 'react'
import logo from '../loo/logo.jpg'

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <h3 className="uf">WELCOME TO OUR VIRTUAL RESTAURANTS APP</h3>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="restaurants">
                Restaurants
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="addmenus">
                Addmenu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pricing">
                pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="booking">
                booking
              </a>
            </li>
          </ul>
          {/* <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar