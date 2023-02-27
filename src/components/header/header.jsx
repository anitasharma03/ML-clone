import React from "react";
import './header.css'
import logo from '../../Assets/ml-logo.png';
function Header() {
  return (
    <div>
      <header id="header">
        <div id="header-holder" className="header-wrap">
          <a href="/" className="header-cta mwc-cta" onclick="scrollMwc()">
            Speak to an expert
          </a>
          {/* <button
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
          </button> */}
          <nav className="nav">
            <ul id="mega-menu" role="menubar" className="main-nav">
              <li className="main-nav-item">
                <a href="/contact-us#letsConnect" role="menuitem" className="header-cta">
                  Speak to an expert
                </a>
              </li>
              <li id="expertise" className="main-nav-item">
                <a href="/expertise" role="menuitem">
                  Expertise
                </a>
              </li>
              <li id="case-studies" className="main-nav-item">
                <a href="/case-studies" role="menuitem">
                  Case Studies
                </a>
              </li>
              <li id="podcasts" className="main-nav-item">
                <a href="/podcast" role="menuitem">             
                  Podcast
                </a>
              </li>
              <li className="main-nav-item" id="perspective">
                <a href="/perspectives" role="menuitem">
                  Perspective
                </a>
              </li>
              <li className="main-nav-item" id="about">
                <a href="/about-us" role="menuitem">
                  About
                </a>
              </li>
              <li className="main-nav-item" id="careers">
                <a href="/careers" role="menuitem">
                  Careers
                </a>
              </li>
              <li className="main-nav-item contact" id="connect">
                <a href="/contact-us" role="menuitem" className="active">
                  Contact
                </a>
                <div className="droplet" role="menu">
                  <ul role="list">
                    <li role="listitem">
                      <a role="menuitem" href="/contact-us#offices">
                        Locations
                      </a>
                    </li>
                    <li role="listitem">
                      <a id="lastDropItem" role="menuitem" href="/contact-us#letsConnect">
                        Form
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="header-logo">
            <a href="/" className="logo" id="headerLogo">
              <img
                src={logo}
                alt="MobileLIVE Site Logo"
                width={134}
                height={31}
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
