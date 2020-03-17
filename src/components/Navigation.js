import React from 'react';
 
import { NavLink } from 'react-router-dom';

{/* sets the button of the active page to orange and white */}
const ACTIVE = {background: '#FA6900', color: '#fff'}
{/* The nav bar function */}
const Navigation = () => {
    return (
      <div id="NavBg">
       <div className="Nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/reminders">Reminders</NavLink>
         
          
       </div>
      </div>
    );
}
 
export default Navigation;