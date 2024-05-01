import { useContext, useEffect, useState } from "react";
import { countryInfo } from "./Memoria.jsx";
import "/src/styles/search.css";

function Search({ filteredCountries }) {
  const countryName = useContext(countryInfo);
  const [inputValue, setInputValue] = useState("");
  const [filterNames, setFilternames] = useState([]);
  const [searchNav, setSearchNav] = useState("");

  function onChange(e) {
    if (e.target.value !== "") {
      setInputValue(e.target.value);
      setSearchNav("active");
    } else {
      setSearchNav("");
    }
  }
  function filteredNames(letter) {
    const names = countryName.map((item) => item.name);
    const filtered = names.filter((name) =>
      name.toLowerCase().includes(letter.toLowerCase())
    );
    setFilternames(filtered);
  }
  function countryClick(v) {
    setInputValue(v);
    setSearchNav('')
  }

  useEffect(() => {
    filteredNames(inputValue);
    filteredCountries("search", filterNames);
  }, [inputValue]);

  return (
    <div className="search_container">
      <form>
        <div>
          <i className="bi bi-search"></i>
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => onChange(e)}
          value={inputValue} //Revisar al final, problemas con renderizado
        />
      </form>
      <div className={`search_result ${searchNav}`}>
        {filterNames.map((item, index) => (
          <div
            key={index}
            className="results"
            onClick={() => countryClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
