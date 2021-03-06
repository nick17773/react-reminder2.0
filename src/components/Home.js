import React from "react";
import { NavLink } from "react-router-dom";
/* this file is for the basic home page. */
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
          <p>
            Welcome to my Reminder app!
            <br />
            <br />
            Please refer to the page{" "}
            {/* this nav link forwards to the reminders page */}
            <NavLink to="/reminders">Reminders</NavLink> to create a reminder
          </p>
        </section>
      </div>
    </div>
  );
};

export default home;
