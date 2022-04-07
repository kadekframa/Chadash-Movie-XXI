import movies from "./movies.js";

class DataSource{
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=abe4aee0fcb17aad33dbd7a1d40e25ce&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.results){
                    return Promise.resolve(responseJson.results);
                }else
                    return Promise.reject(`${keyword} is not found gaes...!`);
            })
    };
}

export default DataSource;