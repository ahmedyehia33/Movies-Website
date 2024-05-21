import React from 'react';
import './home.css'
import Popular from '../../Popular';

const Home = () => {
    return ( <>
    <div className="container">
        <h3>Hitman's Wife's Bodyguard</h3>
        <p><span className='date'>June 14, 2021 </span></p>
        <div className="trailer"><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a> Watch the trailer</div>
    </div>
    <Popular/>
    </> );
}
 
export default Home;