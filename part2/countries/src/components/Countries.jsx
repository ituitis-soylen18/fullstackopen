const Countries = ({ countries }) => {
  const len = countries.length;
  let content = null;

  if (len > 10) {
    content = <div>Too many matches, specify another filter</div>;
  } else if (len > 1) {
    content = (
      <ul>
        {countries.map((country) => {
          return <li key={country.name.common}>{country.name.common}</li>;
        })}
      </ul>
    );
  } else if (len === 1) {
    const country = countries[0];
    content = (
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
        <img src={country.flags.png} alt={country.flags.alt} width="200"/>
      </div>
    );
  } else {
    content = <div>No country matched with the searched text</div>;
  }

  return content;
};

export default Countries;
