const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const movieListElement = document.querySelector("#movieList");

    const onButtonSearchClicked = () => {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchMovie(searchElement.value);
    };

    const renderResult = results => {
        movieListElement.innerHTML = "";
        results.forEach(function (movie) {
            const {name, fanArt, description} = movie;

            const movieElement = document.createElement("div");
            movieElement.setAttribute("class", "movie");

            movieElement.innerHTML = `
                <img class="fan-art-movie" src="${fanArt}" alt="Fan Art">
                <div class="movie-info">
                <h2>${name}</h2>
                <p>${description}</p>
                </div>`;
            movieListElement.appendChild(movieElement);
        })
    };

    const fallbackResult = message => {
        movieListElement.innerHTML = "";
        movieListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};