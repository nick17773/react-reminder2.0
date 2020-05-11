import React from "react";
import { NavLink } from "react-router-dom";
// this file is for the error message that crops up when the page is non-existant.
const Error = () => {
  return (
    <div>
      <header>
        <div className="wrapper">
          <h1>Error 404: Page not found!</h1>
        </div>
        
      
      </header>
      <br/>
      <section className="error">
      
        <p>
          This page does not exist! Please input a different URL or, use{" "}
          <NavLink to="/">This Link</NavLink> To return to the home page.
        </p>
      </section>
    </div>
  );
};

export default Error;
