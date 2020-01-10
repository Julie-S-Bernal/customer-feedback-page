import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body{
    padding-top:80px;
    font-family: 'Roboto', sans-serif;
    background: #1d976c;
    background: -webkit-linear-gradient(to right, #1d976c, #93f9b9);
    background: linear-gradient(to right, #1d976c, #93f9b9);

  input {
    width: 100%;
    height: 45px;
    border: solid 1px white;
    border-radius: 3px;
    background-color: rgba(255,255,255,0.3);
    transition: 0.3s all;
    font-size: 1em;
    color: white;
  }
  input[type="submit"]{
    background-color: white;
    color: #1d976c;
    font-size: 1.2em;
    text-transform: uppercase;
  }
  input[type="submit"]:focus{
    box-shadow: 0px 0px 5px rgba(0,0,0,.3);
    border-color: transparent;
  }

  input[type=text]:focus, textarea:focus {
    box-shadow: 0px 0px 5px rgba(0,0,0,.3);
    margin: 5px 1px 3px 0px;
    border-color: transparent;
  }

  .nav ul li a {
    font-family: soleil, sans-serif;
    font-weight: 100;
    font-size: 25px;
    color: white;
    padding: 19px 16px;
    transition: background 0.4s, text-shadow 0.4s;
    cursor: pointer;
  }

  h1 {
   color: white;
   font-family: 'Roboto', sans-serif;
  }
  h2 {
    color: white;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
  }
  h2 {
    color:  #1b5c87;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
  }

  label {
    color: white;
    font-family: 'Roboto', sans-serif;
  }
}`

export default GlobalStyles;
