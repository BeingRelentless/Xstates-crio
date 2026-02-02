import { useEffect, useState } from "react";

function State({ country, state, setState }) {
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (!country) {
      setStates([]);
      return;
    }

fetch(
  `https://location-selector.labs.crio.do/country=${country}/states`,
  { cache: "no-store" }
)
      .then(res => res.json())
      .then(data => setStates(data))
      .catch(() => setStates([])); // ✅ silent fail
  }, [country]);

  return (
    <select
      id="state"
      value={state}
      onChange={(e) => setState(e.target.value)}
      disabled={!country}
    >
      <option key="placeholder" value="">Select State</option>
      {states.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  );
}

export default State;
