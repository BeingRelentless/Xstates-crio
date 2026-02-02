function SelectedLocation({ city, state, country }) {
  return (
    <span className="shownstate">
      You selected {city}, {state}, {country}
    </span>
  );
}

export default SelectedLocation;
