import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const urls = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Us",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
];
const NavBar = () => {
  const link = urls.map((route) => <Link key={route.id} route={route}></Link>);
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="flex justify-between mx-5 mt-5
        "
    >
      <span className="flex gap-3" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul className={`md:hidden absolute duration-1000 ml-6 ${open?'mt-8':"-mt-30"}`}>{link}</ul>
        <h3>MyNav</h3>
      </span>
      <ul className="md:flex md:gap-5.5 hidden">{link}</ul>
      <button>Login</button>
    </nav>
  );
};

export default NavBar;
