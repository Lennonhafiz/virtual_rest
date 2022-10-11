import React from 'react'
import icon from "../image/icon.jpg"
import Footer from './Footer';
import NavBar from '../components/NavBar'

function Home() {
  
  return (
    <main className="card">
      <NavBar />
      <div>
        <h4>We connect customers to the right restaurants </h4>
      </div>
      <div className="icon">
        <h3 className="sub">HEALTHY MENUS AVAILABLE</h3>
        <img src={icon} alt="" />
      </div>

      <Footer />
    </main>
  );
}

export default Home