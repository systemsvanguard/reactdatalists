// src/pages/FileList.js
import React from 'react';
import CaricomCountries from '../site/countries'

function FileList() {
  return (
    <div className="w3-container">
      <h1 className="myheading">External File Data List</h1>
      <p className="w3-margin-bottom">The data below comes from a centralized external JavaScript data file located at <span className="spotlight">"/src/site/countries.js"</span>.</p>

      <div class="w3-row w3-container w3-center">
          <div class="w3-col m3">
          </div>

          <div class="w3-col m8 w3-center">
          { CaricomCountries.map(data => (
                  <div className="w3-card-4 w3-margin w3-center" key={data.id}>
                    <header class="w3-container w3-blue w3-center w3-round">
                      <h1><strong>{data.country}</strong></h1>
                    </header>

                    <div className="w3-container w3-center w3-hover-shadow">
                    <img src={ 'images/countries_64/' + data.flag} alt={data.country} title={data.country} className="w3-center w3-round" />

                    <h3>Capital City: <strong>{data.capital}</strong></h3>
                    <p>
                      Population <strong>{data.population}</strong> | Area {data.area} <br />
                      GDP Total {data.GDP_Total} | GDP per Capita {data.GDP_pC}<br />
                      Independence : {data.independence}<br />
                      Joined Caricom : {data.joined}
                    </p>
                    </div>
                    <footer className="w3-container w3-blue w3-center">
                    <a href={data.wiki} className="w3-button w3-margin w3-purple w3-hover-red w3-round">Wikipedia - <strong>{data.country}</strong></a>
                    </footer>
                  </div>

                ) )  }
          </div>

          <div class="w3-col m1 w3-center">
          </div>
        </div>



      <p>Hearties lass grapple lad Barbary Coast rutters bucko. Fire in the hole walk the plank scourge of the seven seas Sail ho dead men tell no tales log Chain Shot. Six pounders scuttle American Main belay crack Jennys tea cup overhaul chase.</p>
    </div>
  )
}

export default FileList;