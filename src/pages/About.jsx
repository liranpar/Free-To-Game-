import React from "react";
import { withRouter } from "react-router-dom";

function _About() {
  return (
    <section className="about main-layout">
      <h1>About Free To Game!</h1>
      <p>
        Free To Game! is a single page application who provide you the best tool
        to choose your favorite game and enjoy it.
      </p>
    </section>
  );
}

export const About = withRouter(_About);
