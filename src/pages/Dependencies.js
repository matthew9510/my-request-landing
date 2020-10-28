import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import myRequestMiniLogo from '../assets/images/my-request-mini-logo-white.png';

const IndexPage = () => (
  <Layout fullMenu>
    {/* <header id="header">
      <div>
        <Link className="header-container" to="/">
          <img src={myRequestMiniLogo} className="header-icon"></img>
          <h1>My Request</h1>
        </Link>
      </div>
    </header> */}
    <article id="main">
      <section className="wrapper style5 dependencies-section" id="top">
        <div className="inner dependencies">
          <h1>Dependencies</h1>
          <p id="dependency-prompt">
            List of dependencies used to create My Request:
          </p>
          <ul id="dependency-list">
            <li>Angular</li>
            <li>Aws-amplify</li>
            <li>Aws-amplify-angular</li>
            <li>Aws-serverless-express</li>
            <li>Browserlist</li>
            <li>Cors</li>
            <li>Express</li>
            <li>hammerjs</li>
            <li>Moment</li>
            <li>ngneat/Transloco</li>
            <li>Ngx-order-pipe</li>
            <li>Rxjs</li>
            <li>Serverless</li>
            <li>Stripe</li>
            <li>Tslib</li>
            <li>TypeScript</li>
            <li>Zone.js</li>
          </ul>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
