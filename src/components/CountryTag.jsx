import { Link } from "react-router-dom";
import "/src/styles/countryTag.css";
import { useEffect, useState } from "react";

function CountryTag({ flags, name, population, region, capital }) {
  const [animationIn, setAnimationIn] = useState("");

  useEffect(() => {
    setAnimationIn("in");
  },[]);

 

  return (
    <>
      <Link to={`/flag/${name}`} className={`tag_container ${animationIn}`}>
        <div className="img_container">
          <img src={flags.png} alt={`country_flag_${name}`} />
        </div>
        <div className="information">
          <h1>{name}</h1>
          <div>
            <p>Population:</p>
            <span>{population}</span>
          </div>
          <div>
            <p>Region:</p>
            <span>{region}</span>
          </div>
          <div>
            <p>Capital:</p>
            <span>{capital}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CountryTag;
