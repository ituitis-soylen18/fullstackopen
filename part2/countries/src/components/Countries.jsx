import { useState } from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map((lan) => {
          return <li key={lan}>{lan}</li>;
        })}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} width="200" />
    </div>
  );
};

const Countries = ({ countries }) => {
  const [viewCountry, setViewCountry] = useState(null);
  const len = countries.length;
  let content = null;

  const showCountry = (country) => {
    setViewCountry(country);
  };
  if (len > 10) {
    content = <div>Too many matches, specify another filter</div>;
  } else if (viewCountry != null) {
    content = <Country country={viewCountry} />;
  } else if (len > 1) {
    content = (
      <ul>
        {countries.map((country) => {
          return (
            <div>
              <li key={country.name.common}>
                {country.name.common}
                <button
                  onClick={() => {
                    showCountry(country);
                  }}
                >
                  show
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    );
  } else if (len === 1) {
    const country = countries[0];
    content = <Country country={country} />;
  } else {
    content = <div>No country matched with the searched text</div>;
  }

  return content;
};

export default Countries;
