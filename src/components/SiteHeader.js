import React from 'react';
import { Link } from "@reach/router";

function SiteHeader() {
  return (
    <div className="navbar">
        <nav>
          <Link to="/">Home</Link> |
          <Link to="arraylist">Array List</Link> |{" "}
          <Link to="filelist">File List</Link> |{" "}
          <Link to="apilist">API List</Link> |{" "}
          <Link to="datatable">Data Table</Link> |{" "}
          <Link to="fruits">Fruits</Link>
        </nav>
    </div>
  )
}

export default SiteHeader;