const RentalCard = ({ location }) => {
  return (
    <div>
      <h1>{location.title}</h1>
      <img src={location.cover} alt={`photo ${location.title}`} />
      <p>Other details of the location...</p>
    </div>
  );
};

export default RentalCard;