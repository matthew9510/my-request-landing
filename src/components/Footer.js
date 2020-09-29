import React from 'react';
import config from '../../config';
import copyrightImage from '../assets/images/softstack-factory-copyright.png';

export default function Footer() {
  return (
    <footer id="footer">
      <img src={copyrightImage} alt="copyright logo" id="copyright" />
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
    </footer>
  );
}
