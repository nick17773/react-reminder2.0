import React from "react";
import { NavLink } from "react-router-dom";
// this file is for the error message that crops up when the page is non-existant.
const Error = () => {
  return (
    <div className="error">
      <h1>Error 404: Page not found!</h1>
      <br />
      <br />
      <p>
        This page does not exist! Please input a different URL or, use{" "}
        <NavLink to="/">This Link</NavLink> To return to the home page.
      </p>
    </div>
  );
};

export default Error;
