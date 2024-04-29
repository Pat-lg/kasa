












// import React, { useState } from 'react'; // Importation de React et du hook useState
// import arrowLeft from "../assets/arrow-left.svg"; // Importation de l'icône de flèche gauche
// import arrowRight from "../assets/arrow-right.svg"; // Importation de l'icône de flèche droite

// const Caroussel = ({ imgArr }) => { // Définition du composant Caroussel avec une liste d'images comme prop
//   const [current, setCurrent] = useState(0); // Déclaration de l'état pour suivre l'indice de la diapositive actuelle

//   const clickRight = () => { // Définition de la fonction pour passer à la diapositive suivante
//     setCurrent((prev) => (prev + 1) % imgArr.length); // Mise à jour de l'indice de la diapositive actuelle avec modulo pour boucler à la première diapositive si nous atteignons la fin
//   };

//   const clickLeft = () => { // Définition de la fonction pour passer à la diapositive précédente
//     setCurrent((prev) => (prev - 1 + imgArr.length) % imgArr.length); // Mise à jour de l'indice de la diapositive actuelle avec modulo pour boucler à la dernière diapositive si nous sommes à la première
//   };

//   return (
//     <div className="carousel"> {/* Début du conteneur du carrousel */}
//       <div className="carousel__container"> {/* Conteneur des diapositives */}
//         {imgArr.map((img, index) => ( {/* Mapping à travers le tableau d'images pour afficher chaque diapositive */}
//           <div
//             key={index} // Clé unique pour chaque diapositive
//             className={`carousel__slide ${index === current ? 'active' : ''}`} // Ajout de la classe active si l'indice de la diapositive correspond à l'indice actuel
//           >
//             <img src={img} alt="slide" /> {/* Affichage de l'image de la diapositive */}
//           </div>
//         ))}
//       </div>
//       {imgArr.length > 1 && ( {/* Affichage des boutons de contrôle uniquement si le nombre d'images est supérieur à 1 */}
//         <>
//           <button
//             type="button"
//             className="carousel__control carousel__control--left" // Bouton pour passer à la diapositive précédente
//             onClick={clickLeft} // Appel de la fonction clickLeft lors du clic sur le bouton
//           >
//             <img src={arrowLeft} alt="left arrow" /> {/* Affichage de l'icône de la flèche gauche */}
//           </button>
//           <button
//             type="button"
//             className="carousel__control carousel__control--right" // Bouton pour passer à la diapositive suivante
//             onClick={clickRight} // Appel de la fonction clickRight lors du clic sur le bouton
//           >
//             <img src={arrowRight} alt="right arrow" /> {/* Affichage de l'icône de la flèche droite */}
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Caroussel; // Exportation du composant Caroussel
