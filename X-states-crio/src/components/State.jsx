import { useEffect, useState } from "react";

function State({ country, state, setState }) {
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (!country) {
      setStates([]);
      return;
    }

    fetch(`https://location-selector.labs.crio.do/country=${country}/states`)
      .then(res => res.json())
      .then(data => setStates(data));
  }, [country]);

  return (
    <select
      data-testid="state-select"
      value={state}
      onChange={(e) => setState(e.target.value)}
      disabled={!country}
    >
      <option value="">Select State</option>
      {states.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  );
}

export default State;
