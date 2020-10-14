import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import Events from '../components/Events';

import myRequestLogo from '../assets/images/my-request-logo.png';
import halfNoteFill from '../assets/images/half-note-fill.svg';
import eighthNoteFill from '../assets/images/eighth-note-fill.svg';
import doubleEighthNoteFill from '../assets/images/double-eighth-note-fill.svg';
import doubleEighthNoteWhite from '../assets/images/double-eighth-note-white.svg';

import performerImage from '../assets/images/performer.jpg';
import performerClientImage from '../assets/images/performer-client.png';
import requesterClientTopUpImage from '../assets/images/requester-client-top-up.png';
import requesterClientStreamImage from '../assets/images/requester-client-twitch-stream.png';
import config from '../../config';

import Magnifier from 'react-magnifier';

import {
  BrowserView,
  MobileView,
  isTablet,
  isMobile,
} from 'react-device-detect';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <img src={myRequestLogo} alt="My Request Logo" id="my-request-logo" />

        <div className="align-center">
          <div className="slogan-container">
            <div className="left-slogan">
              <img src={halfNoteFill} alt="half note" id="half-note" />
            </div>
            <div>
              <p className="slogan">{config.subHeading}</p>
            </div>
            <div className="right-slogan">
              <img src={eighthNoteFill} alt="eighth-note" id="eighth-note" />
            </div>
          </div>
        </div>

        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="spotlight primary-color">
      {!isTablet && (
        <BrowserView viewClassName="image">
          <Magnifier
            alt="Performer using the My Request performer client"
            src={performerImage}
            mgWidth={350}
            mgHeight={350}
            mgTouchOffsetX={-40}
            mgTouchOffsetY={0}
            zoomFactor={1.4}
            mgShowOverflow={false}
            id="performer"
          />
        </BrowserView>
      )}
      <MobileView viewClassName="image">
        <img
          src={performerImage}
          alt="Performer using the My Request performer client"
          id="performer"
        />
      </MobileView>

      <div className="content">
        <div className="mission-container">
          <div className="mission-left">
            <p>
              <strong>My Request</strong> aims to connect musicians with their
              audience by providing an interface which seamlessly allows the
              performer to manage and accept song requests during live
              performances.
            </p>
            <p>
              Through the use of a friction-less user experience, My Request
              grants performers to interact with their audience.
            </p>
            <p>
              My Request offers the ability to host virtual stream events
              alongside in-person events, and gives the performer a chance to
              get paid from their engaged audience.
            </p>
          </div>
          <div className="mission-right">
            <img
              src={doubleEighthNoteWhite}
              alt="double eighth note"
              id="double-eighth-note"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        {!isTablet && (
          <BrowserView viewClassName="image">
            <Magnifier
              src={performerClientImage}
              mgWidth={350}
              mgHeight={350}
              mgTouchOffsetX={-30}
              mgTouchOffsetY={-30}
              zoomFactor={0.6}
              mgShowOverflow={false}
              alt="My Request performer client"
              id="performer-client"
            />
          </BrowserView>
        )}
        <MobileView viewClassName="image">
          <img
            src={performerClientImage}
            alt="My Request performer client"
            id="performer-client"
          />
        </MobileView>
        <div className="content">
          <h2>Control is in the Performers Hands</h2>
          <p>
            Only requests accepted to be played by the performer will be
            presented to the audience. A pending requests filter allows the
            performer to better manage requests to be played during live
            performances.
          </p>
          <p>
            Performers have the capability to control the sorting order of the
            requests queue based on price or time.
          </p>

          <p>
            In addition, the performer can override the queue order based on
            personal preferences.
          </p>
        </div>
      </section>
      <section className="spotlight">
        {!isTablet && (
          <BrowserView viewClassName="image">
            <Magnifier
              src={requesterClientTopUpImage}
              mgWidth={350}
              mgHeight={350}
              mgTouchOffsetX={-30}
              mgTouchOffsetY={-30}
              zoomFactor={0.6}
              mgShowOverflow={false}
              alt="My Request Requester client presenting top up feature"
            />
          </BrowserView>
        )}
        <MobileView viewClassName="image">
          <img
            src={requesterClientTopUpImage}
            alt="My Request Requester client presenting top up feature"
          />
        </MobileView>
        <div className="content">
          <h2>Keeping Requesters in Mind</h2>
          <p>
            Requesters can top-up funds of an existing song request to bump it's
            original request queue order so that it can have a chance of being
            played sooner.
          </p>
        </div>
      </section>
      <section className="spotlight">
        {!isTablet && (
          <BrowserView viewClassName="image">
            <Magnifier
              src={requesterClientStreamImage}
              mgWidth={350}
              mgHeight={350}
              mgTouchOffsetX={-30}
              mgTouchOffsetY={-30}
              zoomFactor={0.6}
              mgShowOverflow={false}
              alt="My Request Requester client presenting streaming capabilities"
            />
          </BrowserView>
        )}
        {isMobile && isTablet && (
          <MobileView viewClassName="image">
            <img
              src={requesterClientStreamImage}
              alt="My Request Requester client presenting streaming capabilities"
            />
          </MobileView>
        )}
        <div className="content">
          <h2>Streaming Integration</h2>
          <p>
            With Twitch stream integration, My Request makes it possible to host
            live virtual events, in addition to working smoothly with in-person
            events too.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <Events />

        <div className="app-buttons-container">
          <a
            href="https://performer.myrequest.live/"
            className="button primary performer-app-button"
            target="_blank"
          >
            Performer App
          </a>

          <a
            href="https://app.myrequest.live/events"
            className="button primary requester-app-button"
            target="_blank"
          >
            Requester App
          </a>
        </div>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Interested in Joining My Request as a Performer?</h2>
          <p>Feel free to send email to be part of the My Request beta.</p>
        </header>
        <div className="actions join-beta-button">
          <a
            href="mailto: myrequest-beta@softstackfactory.com?subject=My Request Beta Access"
            className="button secondary"
            target="_blank"
          >
            Join the Beta
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
