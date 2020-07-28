// src/pages/Item.js
import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="w3-container">
        <h1 className="w3-center">Item</h1>
        <h2>Slug: {this.props.itemId}</h2>
      </div>
    );
  }
}

export default Item;