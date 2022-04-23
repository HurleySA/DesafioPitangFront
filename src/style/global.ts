import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    ul, li{
        list-style:none;
    }
    
    img{
        max-width: 100%;
    }

    button, input{
        display: block;
        font-size: 1rem;
        color: #333;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    
    .container {
        max-width: 76rem;
        margin: 0 auto;
    }
    .react-datepicker__time-container   .react-datepicker__time  
    .react-datepicker__time-box   ul.react-datepicker__time-list {  
    flex-direction: column;
    padding: 0; 
    }

    .react-datepicker__day{}

    .react-datepicker__day--selected, .react-datepicker__day--selected:hover, .react-datepicker__day--keyboard-selected, li.react-datepicker__time-list-item--selected{
        background-color: #CA4F2F !important;
        color: #fafafa;
    }
    

`