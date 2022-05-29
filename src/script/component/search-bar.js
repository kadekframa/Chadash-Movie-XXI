class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
     }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                z-index: 10;
                max-width: 1800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                background-color: white;
            }
            
            .search-container > input {
                width: 100%;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid rgb(37, 95, 129);
                font-size: 17px;
                font-weight: lighter;
                font-family: 'Varela Round', sans-serif;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid rgb(37, 95, 129);
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: rgb(37, 95, 129);
                font-weight: normal;
            }
            
            .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: rgb(37, 95, 129);
                color: white;
                border: 0;
                text-transform: uppercase;
                border-radius: 6px;
            }

            .search-container > button:hover {
                font-size: 16px;
                font-weight: lighter;
                box-shadow: 0 1px 10px 0 rgba(136, 136, 136, 0.734);
                transition: all .1s ease-in;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
            
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
            
                .search-container > button {
                    width: 100%;
                }
            }
        </style>
        <div id="search-container" class="search-container">
           <input placeholder="Search Movies" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);