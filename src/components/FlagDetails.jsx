import { useContext, useEffect } from "react";
import { countryInfo } from "/src/components/Memoria.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import BorderTag from "./BorderTag.jsx";
import "/src/styles/flagdetails.css";

function FlagDetails() {
  const { name } = useParams();
  const info = useContext(countryInfo);
  const CountryName = info.filter((item) => item.name === name);
  const selectedCountry = CountryName[0];
  const {
    nativeName,
    languages,
    flags,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
  } = selectedCountry;
  //Validacion de bordes.
  const borderCodes = CountryName.map((item) => item.borders);
  const borderNames =
    borderCodes[0] && borderCodes.length > 0
      ? info.filter((item) => borderCodes[0].includes(item.alpha3Code))
      : "";

  useGSAP(() => {
    gsap.set(".gsap", {
      x: -1420,
    });
    gsap.to(".gsap", {
      duration: 2,
      ease: "elastic",
      x: 0,
    });
  },CountryName);

  return (
    <>
      <div className="flag_container">
        <div className="firs-container">
          <div className="button_container">
            <Link to={"/"} className="text">
              <button className="back_button">
                <i className="bi bi-arrow-left-short arrow_back"></i> Back
              </button>
            </Link>
          </div>
          <div className="img_container2 gsap">
            <img src={flags.svg} alt="" />
          </div>
        </div>
        <div className="second_container">
          <p className="country_name">{name}</p>
          <div className="country_details">
            <section className="first_section_info">
              <div>
                <p>Native Name:</p>
                <span>{nativeName}</span>
              </div>
              <div>
                <p>Population:</p>
                <span>{population}</span>
              </div>
              <div>
                <p>Region:</p>
                <span>{region}</span>
              </div>
              <div>
                <p>Sub Region:</p>
                <span>{subregion}</span>
              </div>
              <div>
                <p>Capital: </p>
                <span>{capital}</span>
              </div>
            </section>
            <section className="second_section_info">
              <div>
                <p>Top Level Domain: </p>
                <span>{topLevelDomain}</span>
              </div>
              <div>
                <p>Currencies: </p>
                <span>{currencies[0].name}</span>
              </div>
              <div className="leguages_container">
                <p>Languages: </p>
                {languages.map((item, index) => (
                  <span key={index}>{item.name}, </span>
                ))}
              </div>
            </section>
          </div>
          <p className="tittle_border">Border Countries: </p>
          <div className="borders">
            <div>
              {borderNames === "" ? (
                <BorderTag nombre={"No Border"}></BorderTag>
              ) : (
                borderNames.map((item, index) => (
                  <BorderTag key={index} nombre={item.name}></BorderTag>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlagDetails;
