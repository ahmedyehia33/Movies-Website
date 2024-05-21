import React,{useState, useEffect} from 'react';
import './explore.css';
import { Link } from 'react-router-dom';

const Explore = ({moviesList}) => {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const handleChange = (event) => {
        setInputValue(event.target.value);
       
      };
      const handleSearch = () => {
        const result = moviesList.filter((movie) => movie.title.toLowerCase().includes(inputValue.toLowerCase()) ||
    movie.id.toLowerCase() == inputValue.toLocaleLowerCase());
    setSearchResult(result);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    useEffect(() => {
        return () => {
            setSearchResult(null);
            setInputValue('');
        };
    }, []);
    return (  
        
        <div className="explore-container">
            <div className="input-container">
                <input type="text" className="text search-movies-input" 
                 value={inputValue} 
                  onChange={handleChange} 
                  onKeyPress={handleKeyPress}/>
                <button className="btn btn-primary" onClick={handleSearch}>search</button>
            </div>
            <div className="result">
                {!searchResult? (''):
                
                ( searchResult.map((result, index) => (
                    <div className="movie-search-box" key={index} style={{ backgroundImage: `url(${result.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <Link 
                            to={{
                                pathname: `/movies/${result.id}`,
                                state: { searchResult: result } 
                            }} 
                            className="movie-link">
                        
                            <div className="movies-movie-text">
                                <div>
                                    <p>{result.title}</p>
                                </div>
                                <div className="movie-icon">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            )}
        </div>
        </div>
    );
}
 
export default Explore;