import React from 'react';
import { Link } from 'react-router-dom';
import { GiTechnoHeart } from 'react-icons/gi';

function Navbar() {
   return (
      <div className="Navbar">
         <div className="container-fluid"></div>
         <Link className="Navbar__brand" to="/">
            <GiTechnoHeart className="Navbar__brand-logo" />
            <span className="font-weight-light nav__title">TechLove</span>
            <span className="font-weight-bold nav__title--span2">Conf</span>
         </Link>
      </div>
   );
}

export default Navbar;
