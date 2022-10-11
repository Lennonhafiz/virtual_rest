import React from 'react'
import banku from '../menus/banku.jpg' 
import friedrice from '../menus/friedrice.jpg'
import jolof from '../menus/jolof.jpg'
import waakye from '../menus/waakye.jpg'
import NavBar from './NavBar'

function Restaurant() {
  return (
    <main>
      <NavBar />
      <div>
        <p>Welcome to our restaurants List</p>
      </div>
      <div className="firstrow">
        <div className="card">
          <h2>spicy</h2>
          <img src={friedrice} alt="" />
          <p>friedrice</p>
          <button>15 cedis </button>
        </div>

        <div className="card">
          <h2>joyzone at kpaguri</h2>
          <img src={banku} alt="" />
          <p>banku with tilapia</p>
          <button>30cdeis</button>
        </div>

        <div className="card">
          <h2>Global at library</h2>
          <img src={jolof} alt="" />
          <p>jolof</p>
          <button>15 cedis</button>
        </div>

        <div className="card">
          <h2>keezy</h2>
          <img src={waakye} alt="" />
          <p>waakye</p>
          <button>2ocedis</button>
        </div>
      </div>
    </main>
  );
}


export default Restaurant