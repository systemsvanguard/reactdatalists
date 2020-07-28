// src/pages/ArrayList.js
import React from 'react';

function ArrayList() {
  // supply list data
  const CaricomCountries2 = [
    { id: 1,  country: 'Antigua and Barbuda', joined: '4 July 1974', flag: 'antigua.png', wiki: 'https://en.wikipedia.org/wiki/Antigua_and_Barbuda', capital : 'St. John\'s', population: '96,286', GDP_Total: '$2.731 billion', GDP_pC: '$29,298', area: '440 sq km', independence: '1 November 1981' },
    { id: 2,  country: 'Bahamas', joined: '4 July 1983', flag: 'bahamas.png', wiki: 'https://en.wikipedia.org/wiki/The_Bahamas', capital : 'Nassau', population: '385,637', GDP_Total: '$12.612 billion', GDP_pC: '$33,494', area: '13,878 sq km', independence: '10 July 1973'},
    { id: 3,  country: 'Barbados', joined: '1 August 1973', flag: 'barbados.png', wiki: 'https://en.wikipedia.org/wiki/Barbados', capital : 'Bridgetown', population: '287,025', GDP_Total: '$5.398', GDP_pC: '$18,798', area: '439 sq km', independence: '30 November 1966' },
    { id: 4,  country: 'Belize', joined: '1 May 1974', flag: 'belize.png', wiki: 'https://en.wikipedia.org/wiki/Belize', capital : 'Belmopan', population: '408,487', GDP_Total: '$3.484 billion', GDP_pC: '$8,576', area: '22,966 sq km', independence: '21 September 1981' },
    { id: 5,  country: 'Dominica', joined: '1 May 1974', flag: 'dominica.png', wiki: 'https://en.wikipedia.org/wiki/Dominica', capital : 'Roseau', population: '71,625', GDP_Total: '$688 Million', GDP_pC: '$9,726', area: '750 sq km', independence: '3 November 1978' },
    { id: 6,  country: 'Grenada', joined: '1 May 1974', flag: 'grenada.png', wiki: 'https://en.wikipedia.org/wiki/Grenada', capital : 'St. George\'s', population: '111,454', GDP_Total: '$1.801 billion', GDP_pC: '$16,604', area: '348.5 sq km', independence: '7 February 1974' },
    { id: 7,  country: 'Guyana', joined: '1 August 1973', flag: 'guyana.png', wiki: 'https://en.wikipedia.org/wiki/Guyana', capital : 'Georgetown', population: '786,391', GDP_Total: '$13.506 billion', GDP_pC: '$17,163', area: '214,970 sq km', independence: '26 May 1966' },
    { id: 8,  country: 'Haiti', joined: '2 July 2002', flag: 'haiti.png', wiki: 'https://en.wikipedia.org/wiki/Haiti', capital : 'Port-au-Prince', population: '11,123,178', GDP_Total: '$19.979 billion', GDP_pC: '$1,819', area: '27,750 sq km', independence: '1 January 1804' },
    { id: 9,  country: 'Jamaica', joined: '1 August 1973', flag: 'jamaica.png', wiki: 'https://en.wikipedia.org/wiki/Jamaica', capital : 'Kingston', population: '2,726,667', GDP_Total: '$26.981 billion', GDP_pC: '$9,434', area: '10,991 sq km', independence: '6 August 1962' },
    { id: 10, country: 'Montserrat', joined: '1 May 1974', flag: 'montserrat.png', wiki: 'https://en.wikipedia.org/wiki/Montserrat', capital : 'Plymouth', population: '4,649', GDP_Total: 'US$63 million', GDP_pC: 'US$12,384', area: '102 sq km', independence: ' ~ ' },
    { id: 11, country: 'Saint Kitts and Nevis', joined: '26 July 1974', flag: 'skn.png', wiki: 'https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis', capital : 'Basseterre / Charlestown', population: '52,441', GDP_Total: '$1.758 billion', GDP_pC: '$31,095', area: '261 sq km', independence: '19 September 1983' },
    { id: 12, country: 'Saint Lucia', joined: '1 May 1974', flag: 'st_lucia.png', wiki: 'https://en.wikipedia.org/wiki/Saint_Lucia', capital : 'Castries', population: '181,889', GDP_Total: '$2.689 billion', GDP_pC: '$15,225', area: '617 sq km', independence: '22 February 1979' },
    { id: 13, country: 'Saint Vincent and the Grenadines', joined: '1 May 1974', flag: 'st_vincent.png', wiki: 'https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines', capital : 'Kingstown', population: '110,211', GDP_Total: '$1.373 billion', GDP_pC: '$12,431', area: '389 sq km', independence: '27 October 1979' },
    { id: 14, country: 'Suriname', joined: '4 July 1995', flag: 'suriname.png', wiki: 'https://en.wikipedia.org/wiki/Suriname', capital : 'Paramaribo', population: '575,990', GDP_Total: '$9.044 billion', GDP_pC: '$15,845', area: '163,821 sq km', independence: '25 November 1975' },
    { id: 15, country: 'Trinidad and Tobago', joined: '1 August 1973', flag: 't_and_t.png', wiki: 'https://en.wikipedia.org/wiki/Trinidad_and_Tobago', capital : 'Port of Spain', population: '	1,363,985', GDP_Total: '$45.149 billion', GDP_pC: '$32,684', area: '5,131 sq km', independence: '31 August 1962' }
  ];


  return (
    <div className="w3-container w3-center">
      <h1 className="myheading">Array Data List</h1>
      <p className="w3-margin-bottom">The data below comes from an array within the same file.</p>


        <div class="w3-row w3-container w3-center">
          <div class="w3-col m3">
          </div>

          <div class="w3-col m8 w3-center">
          { CaricomCountries2.map(data => (
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




        <br />

        <p>Tack scuppers long clothes parley sheet crack Jennys tea cup Jack Ketch. Barque Spanish Main Sea Legs Admiral of the Black main sheet Letter of Marque Sail ho. Pieces of Eight strike colors six pounders ho gun gangway fathom.</p>
    </div>
  )
}

export default ArrayList;