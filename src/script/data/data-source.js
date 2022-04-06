class DataSource{
    constructor(onSuccess, onFailed){
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    searchMovie(keyword) {
        const filteredMovies = movies.filter( movie => {
            return movie.name.toUpperCase().includes(keyword.toUpperCase());
        });
    
        if (filteredMovies.length) {
            this.onSuccess(filteredMovies);
        } else {
            this.onFailed(`${keyword} is not found`);
        }
    };
}