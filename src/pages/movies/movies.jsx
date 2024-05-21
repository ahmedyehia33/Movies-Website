import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './movies.css';
import { Link } from 'react-router-dom';




const Movies = () => {
    const [moviesList , setMoviesList] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [totalPages, setTotalPages]  = useState(1);

    const moviesPerPage = 9;

    useEffect(()=>{
        const fetchData = async ()=>{
            const {data} = await axios.get('http://localhost:3000/movies');
            setMoviesList(data);
            setTotalPages(Math.ceil(data.length / moviesPerPage));

                }
        fetchData();
    },[]);

    const startIndex = (currentPage - 1) * 9;
    const endIndex = currentPage * moviesPerPage;
    const currentMovies = moviesList.slice(startIndex, endIndex);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (    <>
    <div className='movies-page-container'>
        <div className="movies-container">
            {currentMovies.map((movie, index) => (
               
                    <div className="movie-list-box" style={{ backgroundImage: `url(${movie.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                       <Link key={index} to={{
                    pathname: `/movies/${movie.id}`,
                    state: { movie } 
                }} className="movie-link">  <div className="movies-movie-text">
                         <div>   <p>{movie.title}</p></div>
                           <div className="movie-icon"> <i className="fa-solid fa-play"></i></div>
                            
                        </div></Link>
                    </div>
                
            ))}
        </div>
        <div className='buttons-container'>
            {/* Render page buttons */}
            {Array.from({ length: totalPages }, (_, i) => (
                <button className='page-button' key={i + 1} onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                </button>
            ))}
        </div>
        </div>
    </> );
}
 
export default Movies;