import { createContext, useEffect, useState } from "react";

export const countryInfo = createContext(null);

function Memoria({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/Locoyoccim/Countries_JSON/main/public/data.json");

        if (!response.ok) {
          throw new Error("Error en la carga de datos");
        }
        const data = await response.json();
        setData(data);
      } catch {
        console.error("Error", error);
      }
    };
    fetchData();
    console.log(data);
  }, []);
  return <countryInfo.Provider value={data}>{children}</countryInfo.Provider>;
}
export default Memoria;
