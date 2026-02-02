import { useEffect, useState } from "react";

function Country({ country, setCountry }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://location-selector.labs.crio.do/countries", {
  cache: "no-store",
})

      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(() => setCountries([])); // ✅ silent fail
  }, []);

  return (
    <select
      id="country"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      <option value="">Select Country</option>
      {countries.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}

export default Country;
