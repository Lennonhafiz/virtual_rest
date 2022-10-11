import React from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Restaurant from './components/Restaurant'
import Login from './screens/Login'
import Signup from './screens/Signup'
import AddRestaurant from './screens/AddRestaurant'
import AddMenu from './screens/AddMenu'
import AddMenus from './components/AddMenus'
import Pricing from './components/Pricing'




function App() {
  return (
    <>
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/addmenu" element={<AddMenu />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
          <Route path="/addmenus" element={<AddMenus />} />
          <Route path="/pricing" element={<Pricing />} /> 
        </Routes>
    
    </>
  );
}

export default App