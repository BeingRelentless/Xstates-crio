import React, { useEffect, useState } from 'react'

function State({ state, setState, country }) {
    const [states, setStates] = useState([])

    async function fetchStates() {
        try {
            if (!country) {
                setStates([])
                return 
            }

            const res = await fetch(`https://location-selector.labs.crio.do/country=${country}/states`)
            const data = await res.json()
            console.log(data)
            setStates(data)
            
        }
        catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchStates();
    }, [country])

    return (
        <div className='state-select'>
            <select name="state" id="state" value={state} onChange={(e) => setState(e.target.value)}>
                <option value="">Select a state</option>
                {country && states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                ))}
            </select>
        </div>
    )
}

export default State