import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, capital, region, population, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  }
  const passWithParams = () =>handleVisitedCountry(country);


  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>
        Name: {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" srcset="" />
      <p>Capital: {capital} </p>
      <p>Region:{region} </p>
      <p>Population:{population} </p>
      <p>
        <small>Code: {cca3} </small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited{" "}
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited This Country" : "I want to go"}
    </div>
  );
};

export default Country;