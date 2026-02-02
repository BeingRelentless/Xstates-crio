import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Fetch countries on mount
  useEffect(() => {
    fetch("https://location-selector.labs.crio.do/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch(() => setCountries([]));
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    if (!country) {
      setStates([]);
      setState("");
      setCities([]);
      setCity("");
      return;
    }

    fetch(
      `https://location-selector.labs.crio.do/country=${country}/states`
    )
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch(() => setStates([]));
  }, [country]);

  // Fetch cities when state changes
  useEffect(() => {
    if (!country || !state) {
      setCities([]);
      setCity("");
      return;
    }

    fetch(
      `https://location-selector.labs.crio.do/country=${country}/state=${state}/cities`
    )
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch(() => setCities([]));
  }, [country, state]);

  return (
    <div>
      {/* Country Dropdown */}
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* State Dropdown */}
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        disabled={!country}
      >
        <option value="">Select State</option>
        {states.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!country || !state}
      >
        <option value="">Select City</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Result */}
      {country && state && city && (
        <span className="shownstate">
          You selected {city}, {state}, {country}
        </span>
      )}
    </div>
  );
}
