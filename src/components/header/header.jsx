import React from "react";
import './header.css'
import logo from '../../Assets/ml-logo.png';
function Header() {
  return (
    <div>
      <header id="header">
        <div id="header-holder" className="header-wrap">          
          <nav className="nav">
  
            <ul id="mega-menu" role="menubar" className="main-nav">
              <li className="main-nav-item">
                <a href="#letsConnect" role="menuitem" className="header-cta">
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
                      <a role="menuitem" href="#offices">
                        Locations
                      </a>
                    </li>
                    <li role="listitem">
                      <a id="lastDropItem" role="menuitem" href="#letsConnect">
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
