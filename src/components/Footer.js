import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-category">
        <div className="footer-item">
          <p>Product Categories</p>
          <ul>
            <li>Consumer</li>
            <li>Professional</li>
            <li>Enterprise</li>
            <li>Components</li>
          </ul>
          <p>Service Plan</p>
          <ul>
            <li>DJI Care</li>
            <li>Osmo Shield</li>
            <li>DJI Care Refresh</li>
          </ul>
        </div>
        <div className="footer-item">
          <p>Where To Buy</p>
          <ul>
            <li>DJI Online Store</li>
            <li>Flagship Stores</li>
            <li>DJI-Operated Stores</li>
            <li>Retail Stores</li>
            <li>Enterprise Retailers</li>
            <li>Agricultural Drone Dealer</li>
            <li>Pro Retailers</li>
            <li>DJI Store App</li>
          </ul>
          <p>Cooperation</p>
          <ul>
            <li>Become a Dealer</li>
            <li>Apply For Authorized Source</li>
          </ul>
        </div>
        <div className="footer-item">
          <p>Flay Safe</p>
          <ul>
            <li>Flay Safe</li>
            <li>DJI Flying Tips</li>
          </ul>
          <p>Support</p>
          <ul>
            <li>Product Support</li>
            <li>Reapair Services</li>
            <li>Help Center</li>
            <li>After-Sales Service Policies</li>
            <li>Download Center</li>
            <li>Security and Privacy</li>
          </ul>
        </div>
        <div className="footer-item">
          <p>Explore</p>
          <ul>
            <li>Newsroom</li>
            <li>Events</li>
            <li>Buying Guides</li>
            <li>STEAM Education</li>
            <li>Mini Drones</li>
            <li>DJI Camera Drones</li>
            <li>DJI Affiliate Program</li>
          </ul>
        </div>
        <div className="footer-item">
          <p>Community</p>
          <ul>
            <li>SkyPixel</li>
            <li>DJI Forum</li>
            <li>Developer</li>
          </ul>
          <p>Subscribe</p>
          <ul>
            <li>Get the latest news from DJI</li>
            <div className="form">
              <input type="email" placeholder="   Your email address" />
              <div className="form-img">
                <img
                  src="https://www1.djicdn.com/dps/dd05c174c215a958f99670248f568617.svg"
                  alt=""
                />
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className="footer-about">
        <div className="footer-navi">
          <div className="footer-about-left">
            <img
              src="https://www1.djicdn.com/dps/85801b4cd1c5717503bc327335f36ef9.svg"
              alt=""
            />
            <p>Who We Are</p>
            <p>Contract Us</p>
            <p>Careers</p>
            <p>Dealer Portal</p>
            <p>RoboMaster</p>
            <p>DJI Entertainment</p>
          </div>

          <div className="footer-about-right">
            <img
              className="footer-social"
              src="//www2.djicdn.com/uploads/footer_social/cover/1792/45cdaaddd205560611c3227d5b3e4530.png"
              alt=""
            />

            <img
              src="//www1.djicdn.com/uploads/footer_social/cover/1793/fe23498b584d0108a232b0d989cfdb9a.png"
              alt=""
            />

            <img
              src="//www5.djicdn.com/uploads/footer_social/cover/1794/2ccdbefa15af4289dfae562d62d0abd0.png"
              alt=""
            />

            <img
              src="//www2.djicdn.com/uploads/footer_social/cover/1797/ebb27f4d98794adda84b78b2e57f7164.png"
              alt=""
            />

            <img
              src="//www4.djicdn.com/uploads/footer_social/cover/1798/3dcfeb05a124980728102a013c2e17de.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-legal">
          <ul className="legal-links">
            <li>DJI Privacy Policy</li>
            <li>Use of Cookies</li>
            <li>Terms of Use</li>
            <li>Business Information</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="footer-change-country">
          <img
            src="//www2.djicdn.com/assets/images/v3/foot/language-7441fda2976c3a423628f392d6fc2498.svg"
            alt=""
          />
          <div className="change-local">
            <span>United States / English</span>
          </div>
        </div>
      </div>
      <div className="footer-ad-desc">
        <div>Copyright © 2021 DJI All Rights Reserved.</div>
        <div>Feedback on web experience</div>
      </div>
    </div>
  );
}

export default Footer;
