import React from 'react';
import { Link } from 'react-router-dom';
import './favorites.css';


const Favorites = ({favorites}) => {
    return ( 
        
            <div className='favorites-page-container'>
                {favorites.length === 0 ? (
                    <div className="empty-favorites">
                        <p>OOPS!..You haven't added any movies to favorites yet..</p>
                    </div>
                ) : (
                    <div className="favorites-container">
                        {favorites.map((movie, index) => (
                            <div className="movie-list-box" key={index} style={{ backgroundImage: `url(${movie.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <Link to={`/movies/${movie.id}`} className="movie-link">
                                    <div className="movies-movie-text">
                                        <div>
                                            <p>{movie.title}</p>
                                        </div>
                                        <div className="movie-icon">
                                            <i className="fa-solid fa-play"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
}
 
export default Favorites;