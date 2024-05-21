import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './movie-details-page.css';

const MovieDetailsPage = ({ moviesList, addToFavorites , favorites }) => {
    const { id } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isFavorite , setIsFavorite] = useState(false)
    
   

    useEffect(() => {
       
        const movie = moviesList.find(movie => movie.id === id);
        setSelectedMovie(movie);
        
    }, [moviesList, id]);

    useEffect(() => {
        if (selectedMovie) {
            setIsFavorite(favorites.some(favorite => favorite.id === selectedMovie.id));
        }
    }, [favorites, selectedMovie]);
     
  

    const handleAddToFavorites = () => {
        if (isFavorite) {
            
            addToFavorites(selectedMovie);
            
        } else {
           
            addToFavorites(selectedMovie);
            
        }
    };

    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    
    return (
        <div className='selected-movie-page'>
        <div className="movie-details-header">
            <div className="title">
                <h4>{selectedMovie.title}</h4>
                 <p>{selectedMovie.year}</p>
            </div>
            <div className="rate"><i className="fa-solid fa-star"></i><p>{selectedMovie.rating}/10</p></div>
        </div>
        <div className="selected-movie-info">
            <div className="category-and-description">
                <div className="categories">{selectedMovie.genre.map((g)=>(
                    <p>{g}</p>
                ))}</div>
                <div className="description">
                    <p>{selectedMovie.description}</p>
                    <i className={`fa-solid fa-heart icon ${isFavorite ? 'favorited' : ''}`} onClick={handleAddToFavorites}></i>
                    </div>
                <div className="imdb-link"><a className='more-info' href={selectedMovie.imdb_link} target='_blank' rel='noopener noreferrer'>IMDb Link</a></div>
            </div>
         <div className="image-container">   
            <img className="selected-movie-image" src={selectedMovie.image} alt={selectedMovie.title} />
            </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;