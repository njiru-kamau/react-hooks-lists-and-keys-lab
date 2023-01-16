import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

// export default NavBar;
const navLinks = links.map(links=> {
  return <key a={links} href={`#+${links}`}>{links}</ a>
})

return <nav>{navLinks}</nav>;}