// src/pages/Fruits.js
import React, { Component } from 'react';
import { Link } from '@reach/router';

const fruits = [
  "Apple" ,
  "BlueBerry" ,
  "Cherry" ,
  "Pear" ,
  "Pineapple" ,
  "Plum," ,
  "Mango" ,
  "Sweetsop" ,
  "Soursop" ,
  "Naseberry" ,
  "Grapes" ,
  "Strawberry" ,
  "Banana" ,
  "Oranges"
];

class Fruits extends Component {
  render() {
    return (
      <div className="w3-container">
        <h1 className="myheading3">List of Fruits</h1>
        <ol className="fruitList">
          {fruits.map(elem => {
            return (
              <li>
                <Link to={`${elem}`}>Fruit {elem} </Link>
              </li>
            );
          })}
        </ol>
        <p>Yellow Jack Sail ho chantey bilge gally yo-ho-ho lee. Chase snow sheet Brethren of the Coast bucko fluke scurvy. Ahoy gabion Blimey strike colors squiffy skysail run a shot across the bow. </p>
    </div>
    );
  }
}

export default Fruits;