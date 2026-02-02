function SelectedLocation({ city, state, country }) {
  return (
    <div className="selected-location">
      <span>You selected </span>
      <strong>{city}</strong>
      <span>, {state}, {country}</span>
    </div>
  );
}

export default SelectedLocation;
