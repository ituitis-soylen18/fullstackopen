import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Countries from "./components/Countries";
import { useEffect } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data));
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      setCountriesToShow(
        countries.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchText.toLowerCase());
        })
      );
    }
  }, [searchText, countries]);

  return (
    <div>
      <SearchBar
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Countries countries={countriesToShow} />
    </div>
  );
}

export default App;
