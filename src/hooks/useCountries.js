import axios from "axios";
import { useEffect, useState } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryList = response.data.map((country) => country.name.common);
        setCountries(countryList);
      })
      .catch((error) => {
        console.error("Failed to fetch countries", error);
      });
  }, []);

  return countries;
};

export default useCountries;
