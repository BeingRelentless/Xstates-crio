import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Countries
  useEffect(() => {
    fetch("https://location-selector.labs.crio.do/countries", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch(() => setCountries([]));
  }, []);

  // States
  useEffect(() => {
    setStates([]);
    setState("");
    setCities([]);
    setCity("");

    if (!country) return;

    fetch(
      `https://location-selector.labs.crio.do/country=${country}/states`,
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch(() => setStates([]));
  }, [country]);

  // Cities
  useEffect(() => {
    setCities([]);
    setCity("");

    if (!country || !state) return;

    fetch(
      `https://location-selector.labs.crio.do/country=${country}/state=${state}/cities`,
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch(() => setCities([]));
  }, [country, state]);

  return (
    <div>
      <h1>Select Location</h1>

      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

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

      {country && state && city && (
        <span className="shownstate">
          {`You Selected ${city}, ${state}, ${country}`}
        </span>

      )}
    </div>
  );
}
