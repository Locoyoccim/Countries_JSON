import { useState, useContext, useEffect } from "react";
import { countryInfo } from "./Memoria";
import "/src/styles/SeletedFilter.css";

function SelecteFilter({ filteredCountries }) {
  const [dropDown, setDropDown] = useState("");
  const [filterState, setFilterState] = useState("Filter by Region");
  const info = useContext(countryInfo);

  const uniqueRegions = info.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.region === item.region)
  );
  function dropDownclick() {
    setDropDown(dropDown === "" ? "open" : "");
  }

  function updateFilter(region) {
    setFilterState(region);
  }

  useEffect(() => {
    filteredCountries('select',filterState);
  }, [filterState]);

  return (
    <div className="custom-select" onClick={dropDownclick}>
      <button className="selected-option">
        {filterState}
        <i className="bi bi-caret-up-fill arrow"></i>
      </button>
      <ul className={`options ${dropDown}`}>
        <li
          onClick={() => {
            dropDownclick();
            updateFilter("Filter by Region")
          }}
        >
          All
        </li>
        {uniqueRegions.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              dropDownclick();
              updateFilter(item.region);
            }}
          >
            {item.region}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelecteFilter;
