import React from 'react';
import Link from './Link';


const NavBar = () => {
    const urls = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About Us",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog"
  }
];

    return (
        <nav>
            <ul className='flex gap-3.5'>
                {
                    urls.map(route =><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;