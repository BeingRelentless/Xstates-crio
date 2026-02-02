import React, { useEffect, useState } from 'react'

function City({city, setCity, state, country}) {
    const [cities, setCities] = useState([])
    async function fetchCities(){
        try{
            if(!country || !state){
                setCities([])
                return
            }
            const res = await fetch(`https://location-selector.labs.crio.do/country=${country}/state=${state}/cities`)
            const data = await res.json()
            setCities(data)
    
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchCities();
    },[state, country])
  return (
    <div className='city-select'>
        <select name="city" id="city" value={city} onChange={e => setCity(e.target.value)}>
            <option value="">Select a city</option>
            {country && state && (cities.map(c => (
                <option key={c} value={c}>{c}</option>
            )))}
        </select>
    </div>
  )
}

export default City