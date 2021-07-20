import React from 'react';
import { Link } from "react-router-dom";
import './Card.css'



// const Card = ({ videogame }) => {
//     return(
//         <>
//         <div className ='videogame' key={videogame.id}>
//             <div className='rating'>{videogame.rating}</div>
//             <div className='cardbody'>
//                     <img src={videogame.background_image} alt='' />
//                 <h3 className='name'>{videogame.name}</h3>
//                 <div className = 'genre'>{videogame.genre}</div>
//                 <div>
//                     <div>
//                         <h5>Released</h5>
//                         <span>{videogame.released}</span>
//                     </div>
//                 </div>
//                 <Link to={"/index/description/" + videogame.id}>
//             <button className="btn">See more</button>
//           </Link>    
//             </div>
//         </div>
//         </>
//     )
// }
const Card = ( {videogame} ) => {
  console.log('acaaaaaaaaaaaaaaaaaa',videogame)
    return (
      <>
        {videogame && <div className="videogame" key={videogame.id}>
          <p>Hi</p>
          <div className="rating">{videogame.rating}</div>
          <div className="front">
            <img className='backgroundimg'src={videogame.background_image} width="200px" height="200px" alt="" />
            <h4 className="name">{videogame.name}</h4>
            <div className="stats">
              <div className="released">
                <p>Released</p>
                <span>{videogame.released}</span>
              </div>
              <div className="x">
                {videogame.platforms && videogame.platforms.map((g) => {
                   {
                    if (g.name === "PC") {                   
                      return (
                        <div className="tooltip">
                          <div className="img">
                            <span className="tooltiptext">{g.name}</span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div className="tooltip">
                        <div className="img">
                          <span className="tooltiptext">{g.name}</span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="back">
            <div className="videogame-info">
              <div className="genres">
                {videogame.genres && videogame.genres.map((g, index) => {
                 while (index < 3) return <div className="genre">{g.name} </div>;
                })}
              </div>
            </div>
            <Link to={"/index/description/" + videogame.id}>
              <button className="btn">See more</button>
            </Link>
          </div>
          <div className="background"></div>
        </div>}
      </>
    );
  };


export default Card;