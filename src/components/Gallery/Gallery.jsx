import { NavLink } from "react-router-dom";
import './Gallery.css';
import './Location.css';

const Gallery = ({ locations }) => {
  return (
    <div className="gallery" >
      {locations.map((location) => (
        <div key={`routePaths${location.id}`} className="location">
          <NavLink to={`/logement/${location.id}`}>
            <img src={location.cover} alt={`photo ${location.title}`} />
            <h2 key={`${location.id}`}>{location.title}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Gallery;