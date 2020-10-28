import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import myRequestMiniLogo from '../assets/images/my-request-mini-logo-white.png';
export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <div>
        <Link className="header-container" to="/">
          <img src={myRequestMiniLogo} className="header-icon"></img>
          <h1>My Request</h1>
        </Link>
      </div>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
      {/* <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div> */}
    </header>
  );
}
