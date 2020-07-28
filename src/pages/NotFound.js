// src/pages/NotFound.js
import React from 'react'
import NotFoundImg from '../site/images/not_found.jpg';

const NotFound = () => {
  return (
    <div className="w3-container">
	    <h1 className="w3-center">Oops! Page Not Found</h1>
      <img src={NotFoundImg} className="w3-image w3-round w3-hover-grayscale responsive" alt="Page Not Found" title="Page Not Found" />
	    <p className="w3-center">We are very sorry! We cannot find the resource you are looking for.  Please try again?</p>
	</div>
  )
}

export default NotFound;