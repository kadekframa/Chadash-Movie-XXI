class MovieItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                background-color: white;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            
            .icon-rate{
                margin-top: 6px;
                margin-left: 6px;
                max-width: 24px;
                position: absolute;
            }
            
            .rating-movie {
                font-size: 24px;
                position: absolute;
                color: white;
                margin-top: 6px;
                margin-left: 34px;
            }
            
            .fan-art-movie {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            
            .movie-info {
                padding: 24px;
            }
            
            .movie-info > h2 {
                font-weight: lighter;
            }
            
            .movie-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }        
        </style>
        <div>
            <p class="rating-movie">${this._movie.rating}</p>
            <img class="icon-rate" src="https://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42655-star-icon.png"></img>
            <img class="fan-art-movie" src="${this._movie.backdrop}" alt="Fan Art">
        </div>
        <div class="movie-info">
            <h2><b>${this._movie.title}</b></h2>
            <p>${this._movie.description}</p>
            <br>
            <p>Release Date: <i><b>${this._movie.release}<b></i></p>
        </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);