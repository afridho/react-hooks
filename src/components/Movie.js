import React from "react";

const DEFAULT_IMAGE =  
"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
    const poster = 
    movie.poster === "N/A" ? DEFAULT_IMAGE : movie.Poster;
    return(
        <div className="movie">
            <h3>{movie.Title}</h3>
            <div>
            
                <img class="posterBox" width="170" src={poster} />
            </div>
            <p>({movie.Year})</p>
        </div>
    );
};

export default Movie;