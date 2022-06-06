import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function _AppHeader() {
  return (
    <section className="app-header">
      <div className="header-container main-layout">
        <section className="logo">
          <h1>Free To Game!</h1>
        </section>
        <nav>
          {/* <NavLink exact to="/">
            Home
            </NavLink>
            <NavLink to="/contact">Contacts</NavLink>
          <NavLink to="/statistics">Statistics</NavLink> */}

          <NavLink exact to="/">
            All Games
          </NavLink>
          <NavLink to="/favorites">My Favorites</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </section>
  );
}

export const AppHeader = withRouter(_AppHeader);
