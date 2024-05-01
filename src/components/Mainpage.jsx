import { useContext, useEffect, useState } from "react";
import Search from "/src/components/Search.jsx";
import SelecteFilter from "./SelecteFilter.jsx";
import { countryInfo } from "./Memoria.jsx";
import CountryTag from "./CountryTag.jsx";
import "/src/styles/mainPage.css";

function Mainpage() {
  const info = useContext(countryInfo);
  const [filter, setFilter] = useState(info);

  useEffect(() => {
    setFilter(info); // Actualiza el estado de filter al cargar la página
  }, [info]);

  function filteredCountries(component, values) {
    let filterCo = [];
    if (component === "select") {
      if (values !== "Filter by Region") {
        filterCo = info.filter((item) => item.region === values);
        setFilter(filterCo);
      } else {
        setFilter(info);
      }
    } else if (component === "search") {
      filterCo = info.filter((item) => values.includes(item.name));
      setFilter(filterCo);
    } else {
      setFilter(info);
    }
  }

  return (
    <>
      <div className="filters">
        <Search filteredCountries={filteredCountries} />
        <SelecteFilter filteredCountries={filteredCountries} />
      </div>
      <div id="card_container">
        {filter.map((item, index) => (
          <CountryTag key={index} {...item}></CountryTag>
        ))}
      </div>
    </>
  );
}

export default Mainpage;
