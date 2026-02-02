import React, { useEffect, useState } from 'react'

function Country({ country, setCountry }) {
    const [countries, setCountries] = useState([])
    async function fetchCountries() {
        try {
            const res = await fetch("https://location-selector.labs.crio.do/countries")
            const data = await res.json()
            setCountries(data)
        } catch (e) {
            console.error(e)
        }


    }

    useEffect(() => {
        fetchCountries();
    }, [])

    return (
        <div className='country-select'>
            <select name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select a country</option>
                {countries.map((c, idx) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
        </div>
    )
}

export default Country