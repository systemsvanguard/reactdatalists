// src/components/SiteFooter.js
import React from 'react';

function SiteFooter() {
  return (
    <footer id="footer" className="w3-container w3-padding-64 w3-center w3-opacity w3-sand w3-xlarge">
      <p className="w3-medium">Copyright &copy; 2015 ~ 2020 | All rights reserved.</p>
      <div className="footer_social">
      <i className="fab fa-facebook-official w3-hover-opacity"></i>
      <i className="fab fa-instagram w3-hover-opacity"></i>
      <i className="fab fa-snapchat w3-hover-opacity"></i>
      <i className="fab fa-pinterest-p w3-hover-opacity"></i>
      <i className="fab fa-twitter w3-hover-opacity"></i>
      <i className="fab fa-linkedin w3-hover-opacity"></i>
      </div>
      <p className="w3-medium">Coding portfolio of <a href="http://ryanhunter.org/" target="_blank" rel="noopener noreferrer" >RyanHunter.org</a></p>
    </footer>
  )
}

export default SiteFooter;