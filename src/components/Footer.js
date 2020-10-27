import React from 'react';
import config from '../../config';
import copyrightImage from '../assets/images/softstack-factory-copyright.png';
import { Link } from 'gatsby';
export default function Footer() {
  return (
    <footer id="footer">
      <a
        href="https://www.softstackfactory.com"
        target="_blank"
        id="copyright-anchor"
      >
        <img src={copyrightImage} alt="copyright logo" id="copyright" />
      </a>
      <br />
      <br />
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <Link to="/PrivacyPolicy">Privacy Policy</Link>
    </footer>
  );
}
