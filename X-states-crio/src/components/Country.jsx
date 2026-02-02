import { useEffect, useState } from "react";

function Country({ country, setCountry }) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://location-selector.labs.crio.do/countries")
      .then(res => {
        if (!res.ok) throw new Error("Country fetch failed");
        return res.json();
      })
      .then(data => {
        setCountries(data);
        setError(false);
      })
      .catch(() => {
        setCountries([]);
        setError(true);
      });
  }, []);

  return (
    <>
      <select
        data-testid="country-select"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {error && <span className="error">Failed to load countries</span>}
    </>
  );
}

export default Country;
