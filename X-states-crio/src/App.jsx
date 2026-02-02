import { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country'
import State from './components/State'
import City from './components/City'
import SelectedLocation from './components/SelectedLocation'

function App() {
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")

  // useEffect(()=>{
  //   setCity("")
  //   setState("")
  // },[country])

  // useEffect(()=>{
  //   setCity("")
  // },[state])
  useEffect(() => {
    // country changed → reset everything below it
    setState("");
    setCity("");
  }, [country]);

  useEffect(() => {
    // state changed → reset city ONLY if state is valid
    if (state === "") return;
    setCity("");
  }, [state]);


  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: "20px", alignItems: 'center', justifyContent: 'center' }}>
      <h1>Select location</h1>
      <div className="select-container" style={{ display: "flex", gap: "20px" }}>
        <Country country={country} setCountry={setCountry} />
        <State
          key={country}          // 👈 force remount when country changes
          state={state}
          setState={setState}
          country={country}
        />

        <City
          key={`${country}-${state}`}  // 👈 force remount when country OR state changes
          city={city}
          setCity={setCity}
          state={state}
          country={country}
        />

      </div>
      <div className='selected-location'>
        {country && state && city && <SelectedLocation country={country} state={state} city={city} />}
      </div>

    </div>
  )
}

export default App
