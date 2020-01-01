import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/ftg_logo_neg.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4 has-text-centered-mobile">
                <img
                  src={logo}
                  alt="Fjell Technology Group AS"
                  style={{ width: '14em', marginTop: '5px' }}
                />
                <p style={{ marginTop: '20px' }}>
                  Your partner <br />
                  <span className="has-text-weight-bold">
                    for mass and heat transfer technology
                  </span>
                </p>
              </div>
              <div className="column is-3 has-text-centered-mobile">
                <section className="menu">
                  <p className="has-text-weight-bold has-text-left">Explore</p>
                  <ul className="menu-list remove-margin">
                    <li>
                      <Link to="/" className="navbar-item remove-padding">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item remove-padding" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item remove-padding"
                        to="/project"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item remove-padding"
                        to="/product"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item remove-padding"
                        to="/solutions"
                      >
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item remove-padding"
                        to="/contact/"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3 has-text-centered-mobile">
                <section>
                  <p className="has-text-weight-bold">Visit</p>
                  <p className="has-text-weight-light">
                    Main office: <br /> Idrettsvegen 103 <br />
                    N5353 Straume
                  </p>
                  <p className="">
                    GreenTech office:
                    <br /> Kong Christian Frederiks Plass 3 <br />
                    N-5006 Bergen
                  </p>
                </section>
              </div>
              <div
                className="column is-3 has-text-centered-mobile	
"
              >
                <section className="menu">
                  <p className="has-text-weight-bold">Follow</p>
                  <ul className="menu-list remove-margin">
                    <li>
                      <a
                        title="linkedin"
                        href="https://www.linkedin.com/company/fjell-technology-group-as/"
                        className="remove-padding navbar-item"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        title="facebook"
                        href="https://www.facebook.com/FjellGreenTech/"
                        className="remove-padding navbar-item"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        title="instagram"
                        href="https://www.instagram.com/fjelltechnology/"
                        className="remove-padding navbar-item"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        title="twitter"
                        href="https://twitter.com"
                        className="remove-padding navbar-item"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div style={{ marginTop: '7rem' }}>
              <p>© 2020 Fjell Technology Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

Footer.displayName = 'Footer';
export default Footer;
