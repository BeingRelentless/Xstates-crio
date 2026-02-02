import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";
import State from "./components/State";
import City from "./components/City";
import SelectedLocation from "./components/SelectedLocation";

function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Reset state & city when country changes
  useEffect(() => {
    setState("");
    setCity("");
  }, [country]);

  // Reset city when state changes
  useEffect(() => {
    setCity("");
  }, [state]);

  return (
    <div className="container">
      <h1>Select Location</h1>

      <div className="select-container">
        <Country country={country} setCountry={setCountry} />

        <State
          key={country}             
          country={country}
          state={state}
          setState={setState}
        />

        <City
          country={country}
          state={state}
          city={city}
          setCity={setCity}
        />
      </div>

      {country && state && city && (
        <SelectedLocation
          country={country}
          state={state}
          city={city}
        />
      )}
    </div>
  );
}

export default App;
