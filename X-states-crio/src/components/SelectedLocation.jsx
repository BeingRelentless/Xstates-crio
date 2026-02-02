function SelectedLocation({ city, state, country }) {
  const text = `You selected ${city}, ${state}, ${country}`;

  return (
    <span className="shownstate">
      {text}
    </span>
  );
}

export default SelectedLocation;
