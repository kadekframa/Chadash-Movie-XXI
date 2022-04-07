import movies from "./movies.js";

class DataSource{
    static searchMovie(keyword) {
        return new Promise((resolve, reject) => {
            const filteredMovies = movies.filter( movie => {
                return movie.title.toUpperCase().includes(keyword.toUpperCase());
            });
        
            if (filteredMovies.length) {
                resolve(filteredMovies);
            } else {
                reject(`${keyword} is not found`);
            }
        })
    };
}

export default DataSource;