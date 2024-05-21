import React, { useEffect, useState } from 'react';

import SideNavbar from './pages/Side-Navbar/sideNavbar';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Popular from './Popular';
import Movies from './pages/movies/movies';
import MovieDetailsPage from './pages/movies/movieDetailsPage';

import axios from 'axios';
import Navbar from './pages/navbar/navbar';
import Favorites from './favorites/favorites';
import Explore from './pages/explore/explore';

const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        <div className="body-container">
        <SideNavbar />
        <div className="content">{children}</div>
        </div>
      </div>
    );
  };

const Website = () => {
  const [moviesList , setMoviesList] = useState([]);
  const [favorites , setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
          try {
              const { data } = await axios.get('http://localhost:3000/movies');
              setMoviesList(data);
          } catch (error) {
              console.error('Error fetching movies:', error);
          }
          };
          fetchData();
        }, []);

        const addToFavorites = (movie) => {
          if (favorites.some(favorite => favorite.id === movie.id)) {
              setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== movie.id));
          } else {
              setFavorites(prevFavorites => [...prevFavorites, movie]);
          }
      };
      
    

    return ( <BrowserRouter>
    <Layout>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/movies' element={<Movies moviesList={moviesList}/>}/>
        <Route path="/movies/:id" element={<MovieDetailsPage  moviesList={moviesList} addToFavorites={addToFavorites} favorites={favorites}/>} />
        <Route path='/favorites' element={<Favorites  favorites={favorites}/>} />
        <Route path='/explore' element={<Explore moviesList={moviesList}/>}/>
         
            
        
    </Routes>
    </Layout>
    
    </BrowserRouter> );
}
 
export default Website;