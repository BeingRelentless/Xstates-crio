import { useEffect, useState } from "react";

function State({ country, state, setState }) {
  const [states, setStates] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!country) {
      setStates([]);
      return;
    }

    fetch(`https://location-selector.labs.crio.do/country=${country}/states`)
      .then(res => {
        if (!res.ok) throw new Error("State fetch failed");
        return res.json();
      })
      .then(data => {
        setStates(data);
        setError(false);
      })
      .catch(() => {
        setStates([]);
        setError(true);
      });
  }, [country]);

  return (
    <>
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

      {error && <span className="error">Failed to load states</span>}
    </>
  );
}

export default State;
