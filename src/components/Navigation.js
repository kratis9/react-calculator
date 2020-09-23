import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ url }) {
  return (
    <div className='cal-navigation'>
      <Link
        to={{
          pathname: url || "/",
        }}>
        ...
      </Link>
    </div>
  );
}
