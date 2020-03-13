import React from 'react';
 
import { NavLink } from 'react-router-dom';
const ACTIVE = {background: '#FA6900', color: '#000'}
const Navigation = () => {
    return (
       <div className="Nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/reminders">Reminders</NavLink>
          
       </div>
    );
}
 
export default Navigation;