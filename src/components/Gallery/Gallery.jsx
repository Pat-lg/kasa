import { NavLink } from "react-router-dom";


const Gallery = ({ locations }) => {
  return (
    <>
      {locations.map((location) => (
        <div key={`routePaths${location.id}`} className="gallery">
          <NavLink to={`/data/${location.id}`}>
            <img src={location.cover} alt={`photo ${location.title}`} />
            <h2 key={`${location.id}`}>{location.title}</h2>
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default Gallery;