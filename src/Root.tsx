import * as React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import RouteView from "@/router";

function Root(): JSX.Element {
  return (
    <Router>
      <Link to="/home">home</Link>
      <span> || </span>
      <Link to="/other">other</Link>
      <RouteView />
      {/* <RouteView {...props} /> 子路由 */}
    </Router>
  );
}

export default Root;
