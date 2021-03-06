class AppBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                padding: 60px;
                width: 100%;
                background-color: rgb(32, 83, 112);
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 30px;
                font-size: 36px;
                font-family: 'Acme', sans-serif;
                letter-spacing: 0.6px;
            }
            h5{
                color: black;
                position: absolute;
                padding-left: 36px;

            }
        </style>
        <h2>Chadash Movies <i>XXI</i></h2>
        <h5>&#169; Created by: <i>Kadek Frama</i> | Support by: <i>Dicoding Indonesia</i></h5>
        `;
    }
 }
  
 customElements.define("app-bar", AppBar);