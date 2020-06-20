import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h2>Denzel</h2>
            <p>{movies.length}</p>
        </div>
    );
};

export default Nav;
