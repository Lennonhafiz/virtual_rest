import React, { useState } from "react";
import { MenuContext } from "../context/MenuContext";

const [DeleMenu]=useState(MenuContext)

const handleRemoveMenu = (e) => {
    const id = e.target.getAttribute("id");
    setMenus(menus.filter((menu) => menu.id !== id));
  
return (
      
        <div className="form-group">
            <label htmlFor="id">Id</label>
            <input type="id" className="form-control" onChange={handleRemoveMenu} />
        </div>
)  
  }