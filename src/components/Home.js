import React from 'react';
import { NavLink } from 'react-router-dom';
 
const home = () => {
    return (
       <div>
       <header>
       <div className="wrapper">
          <h1>Home</h1>
          </div>
          </header>
          <div className="container">
          <section className="add-item">
           <p>This is a home page, not much to see here.
           <br/>
           <br/>Please refer to the page <NavLink to="/reminders">Reminders</NavLink> to create a reminder
           </p>
          </section>
           </div>
       </div>
    );
}
 
export default home;
