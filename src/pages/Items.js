// src/pages/Items.js
import React, { Component } from 'react';
import { Link } from '@reach/router';

const items = [1, 2, 3, "stuff", "goes", "here"];

class Items extends Component {
  render() {
    return (
      <div className="w3-container">
        <ul>
          {items.map(elem => {
            return (
              <li>
                <Link to={`${elem}`}>Item {elem} </Link>
              </li>
            );
          })}
        </ul>
    </div>
    );
  }
}

export default Items;