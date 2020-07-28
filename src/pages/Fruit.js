// src/pages/Fruit.js
import React, { Component } from 'react';

class Fruit extends Component {
  render() {
    return (
      <div className="w3-container">
        <h1 className="myheading">{this.props.fruitId}</h1>
        <h2>Our fruit of the moment is {this.props.fruitId}</h2>
        <p>
        Nipper scuttle broadside ye starboard wherry bowsprit. Bilge rat coxswain league hail-shot draft chase guns belay. Tack pillage Nelsons folly haul wind barque lanyard careen.
          <br />
        Avast gangway scuppers walk the plank barkadeer gally topmast. Strike colors long clothes cackle fruit holystone to go on account come about dance the hempen jig. Matey hearties scallywag careen loaded to the gunwalls take a caulk hail-shot.
        </p>

      </div>
    );
  }
}

export default Fruit;