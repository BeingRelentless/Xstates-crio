import React from 'react'

function SelectedLocation({ city, state, country }) {
    return (
        <div>
            <span>You selected</span>
            <span>{city}</span>,
            <span>{state}</span>,
            <span>{country}</span>
        </div>

    )
}

export default SelectedLocation