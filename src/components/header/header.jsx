import React from "react";
import './header.css';

function Header() {
  return (
    <div>
      {/* Hello world */}
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>{" "}
      <header id="header">
        <div id="header-holder" className="header-wrap">
          <a href="/" className="header-cta mwc-cta" onclick="scrollMwc()">
            Speak to an expert
          </a>
          <button
            id="nav-opener-btn"
            className="nav-opener"
            aria-label="Open Navigation Menu"
            aria-expanded="false"
            onclick="openNav()"
          >
            <img
              className="close-img"
              alt=""
              src="/wp-content/uploads/2022/02/hamburger.png"
              width={23}
              height={15}
            />
            <img
              className="open-img"
              alt=""
              src="/wp-content/uploads/2022/03/Multiply-orange.png"
              width={23}
              height={16}
            />
          </button>
          <nav className="nav" aria-label="Main Navigation">
            <ul id="mega-menu" role="menubar" className="main-nav">
              <li className="main-nav-item mobile-hide" role="none">
                <a
                  href="/contact-us#letsConnect"
                  role="menuitem"
                  aria-haspopup="false"
                  className="header-cta"
                >
                  Speak to an expert
                </a>
              </li>
              <li id="expertise" className="has-drop main-nav-item" role="none">
                <a
                  href="/expertise"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Expertise
                </a>
                <button
                  className="down-arrow"
                  aria-label="Click here to open expertise sub menu"
                  aria-expanded="false"
                >
                  <i className="icon icon-chevron-down-solid" />
                </button>
                <div
                  className="droplet"
                  role="menu"
                  style={{ display: "none" }}
                >
                  <ul role="list">
                    <li role="listitem">
                      <a href="/expertise#experience" role="menuitem">
                        Experience
                      </a>
                    </li>
                    <li role="listitem">
                      <a href="/expertise#product" role="menuitem">
                        Product
                      </a>
                    </li>
                    <li role="listitem">
                      <a href="/expertise#technology" role="menuitem">
                        Technology
                      </a>
                    </li>
                    <li role="listitem">
                      <a href="/expertise#approach" role="menuitem">
                        Approach
                      </a>
                    </li>
                    <li role="listitem">
                      <a href="/expertise#engagement" role="menuitem">
                        Engagement
                      </a>
                    </li>
                    <li role="listitem">
                      <a href="/expertise#partners" role="menuitem">
                        Partners
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li id="case-studies" className="main-nav-item" role="none">
                <a href="/case-studies" role="menuitem" aria-haspopup="false">
                  Case Studies
                </a>
              </li>
              <li id="podcasts" className="main-nav-item" role="none">
                <a
                  href="/podcast"
                  role="menuitem"
                  aria-haspopup="false"
                  onclick="clearStorage()"
                >
                  Podcast
                </a>
              </li>
              <li
                className="main-nav-item has-drop"
                id="perspective"
                role="none"
              >
                <a
                  href="/perspectives"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onclick="clearStorage()"
                >
                  Perspective
                </a>
                <button
                  className="down-arrow"
                  aria-label="Click here to open perspective sub menu"
                  aria-expanded="false"
                >
                  <i className="icon icon-chevron-down-solid" />
                </button>
                <div
                  className="droplet"
                  role="menu"
                  style={{ display: "none" }}
                >
                  <ul role="list">
                    <li role="listitem">
                      <a
                        role="menuitem"
                        href="/perspectives"
                        onclick="clearStorage()"
                      >
                        Latest
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/perspectives#videos">
                        Videos
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/perspectives#eguides">
                        eGuides
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/perspectives#blogs">
                        Blogs
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/perspectives#news">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-item has-drop" id="about" role="none">
                <a
                  href="/about-us"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <button
                  className="down-arrow"
                  aria-label="Click here to open about sub menu"
                  aria-expanded="false"
                >
                  <i className="icon icon-chevron-down-solid" />
                </button>
                <div
                  className="droplet"
                  role="menu"
                  style={{ display: "none" }}
                  aria-hidden="true"
                >
                  <ul role="list">
                    <li role="listitem">
                      <a role="menuitem" href="/about-us#journey">
                        Journey
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/about-us#clients">
                        Clients
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/about-us#our-expertise">
                        Expertise
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/about-us#approach">
                        Approach
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/about-us#engagement">
                        Engagement
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/about-us#partners">
                        Partners
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/about-us#awards">
                        Awards
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/about-us#careers">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-item has-drop" id="careers" role="none">
                <a
                  href="/careers"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Careers
                </a>
                <button
                  className="down-arrow"
                  aria-label="Click here to open careers sub menu"
                  aria-expanded="false"
                >
                  <i className="icon icon-chevron-down-solid" />
                </button>
                <div
                  className="droplet"
                  role="menu"
                  style={{}}
                  aria-hidden="true"
                >
                  <ul role="list">
                    <li role="listitem">
                      <a role="menuitem" href="/careers#culture">
                        Culture
                      </a>
                    </li>
                    <li role="listitem">
                      <a role="menuitem" href="/careers/jobs">
                        Open Positions
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-item has-drop" id="connect" role="none">
                <a
                  href="/contact-us"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="active"
                >
                  Contact
                </a>
                <button
                  className="down-arrow"
                  aria-label="Click here to open contact sub menu"
                  aria-expanded="false"
                >
                  <i className="icon icon-chevron-down-solid" />
                </button>
                <div
                  className="droplet"
                  role="menu"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <ul role="list">
                    <li role="listitem">
                      <a role="menuitem" href="/contact-us#offices">
                        Locations
                      </a>
                    </li>
                    <li role="listitem">
                      <a
                        id="lastDropItem"
                        role="menuitem"
                        href="/contact-us#letsConnect"
                      >
                        Form
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="desktop-hide nav-mob-cta">
              <a
                href="/contact-us#letsConnect"
                className="mob-cta nav-first-footer-link"
              >
                Speak to an expert
              </a>
            </div>
            <div className="desktop-hide nav-footer">
              <a
                className="access-link"
                href="https://www.essentialaccessibility.com/mobileLIVE?utm_source=mobileLIVEhomepage&utm_medium=iconlarge&utm_term=eachannelpage&utm_content=header&utm_campaign=mobileLIVE"
              >
                <img
                  className="accessibility"
                  alt="icon to learn more about our commitment to customers and employees with disabilities."
                  src="/wp-content/uploads/2022/10/c80eed6f2f13f65c51e1f0d52b249eb2-3.png"
                  width={78}
                  height={30}
                />
              </a>
              <ul className="nav-footer-links">
                <li>
                  <a href="/sitemap">Sitemap</a>
                </li>
                <li>
                  <a href="/accesibility-plan-and-policy">Accessibility</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy</a>
                </li>
              </ul>
              <a href="/" className="nav-footer-logo">
                <img
                  src="/wp-content/uploads/2020/11/ml-logo.png"
                  alt="MobileLIVE Site Logo"
                  width={134}
                  height={31}
                />
              </a>
              <p className="nav-footer-para">
                © 2022 mobileLIVE inc. All Rights Reserved.
              </p>
            </div>
          </nav>
          <div className="header-logo">
            <a href="/" className="logo" id="headerLogo">
              <img
                src="/wp-content/uploads/2020/11/ml-logo.png"
                alt="MobileLIVE Site Logo"
                width={134}
                height={31}
              />
            </a>
          </div>
        </div>
      </header>
      <p>Enter your HTML here</p>
    </div>
  );
}
export default Header;
