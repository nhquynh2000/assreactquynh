import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
      <div>
  <footer>
    <div className="footer-main">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="footer-widget">
              <h4>About Freshshop</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 							
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="footer-link">
              <h4>Information</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Our Sitemap</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Delivery Information</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="footer-link-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <p><i className="fas fa-map-marker-alt" />Address: Michael I. Days 3756 <br />Preston Street Wichita,<br /> KS 67213 </p>
                </li>
                <li>
                  <p><i className="fas fa-phone-square" />Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                </li>
                <li>
                  <p><i className="fas fa-envelope" />Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer  */}
  {/* Start copyright  */}
  <div className="footer-copyright">
    <p className="footer-company">All Rights Reserved. © 2018 <a href="#">ThewayShop</a> Design By :
      <a href="https://html.design/">html design</a></p>
  </div>
  {/* End copyright  */}
  <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>↑</a>
</div>

    )
}

Footer.propTypes = {

}

export default Footer
