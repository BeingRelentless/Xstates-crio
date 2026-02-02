import { useEffect, useState } from "react";

function City({ country, state, city, setCity }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!country || !state) {
      setCities([]);
      return;
    }

    fetch(`https://location-selector.labs.crio.do/country=${country}/state=${state}/cities`)
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(() => setCities([]));
  }, [country, state]);

  return (
    <select
      id="city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      disabled={!country || !state}
    >
      <option value="">Select City</option>
      {cities.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}

export default City;
