import React, { useState, useContext, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

function AddMenu() {
  const Navigate = useNavigate();
  const { success} = useContext(AuthContext);
  const [menu, setMenu] =useState("");
  const [id, setId] = useState("");
  // const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const { AddMenu } = useContext(MenuContext);
   useEffect(() => {
     if (success) {
       Navigate("/addmenu");
     }
   });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    AddMenu({
      menu:menu.split(","),
      id,
      // image:("//https:bank.jpg"),
      price,
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
                  <label htmlFor="menu">Menu</label>
                  <input type="text" className="form-control" onChange={(t) => setMenu(t.target.value)}/>
              </div>
              
        <div className="form-group">
          <label htmlFor="id">Id</label>
          <input type="id"className="form-control"onChange={(t) => setId(t.target.value)}/>
              </div>
              
        {/* <div className="form-group">
          <label htmlFor="image">image</label>
          <input type="url" className="form-control"onChange={(t) => setImage(t.target.value)}/>
              </div> */}
              
        <div className="form-group">
          <label htmlFor="price">price</label>
                  <input type="text" className="form-control" onChange={(t) => setPrice(t.target.value)} />
                  
        </div>
        <button className="btn btn-danger mt-5" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddMenu;
