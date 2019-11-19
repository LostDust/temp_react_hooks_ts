import * as React from "react";
import { Link } from "react-router-dom";

import RouteView from "@/router";

function Other(props): JSX.Element {
  return (
    <section>
      <p>I&#x27;m other~</p>
      <Link to="/other/child">child</Link>
      <span> || </span>
      <Link to="/other/null">null</Link>
      <RouteView {...props} />
    </section>
  );
}

export default Other;
