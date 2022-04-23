import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-orange-400: #CA4F2F;
        --color-orange-200: #f5967d;
        
        --color-white: #FAFAFA;
        
        --color-black: #000000;
        --color-black-200: #333333;

        --color-gray-400: rgba(0,0,0,0.3);
        --color-gray-200: rgba(0,0,0,0.1);
    }

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
        color: var(--color-black-200);
    }
    a{
        text-decoration: none;
        color: var(--color-black-200);
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

       .react-datepicker__time-container   .react-datepicker__time  
    .react-datepicker__time-box   ul.react-datepicker__time-list {  
    flex-direction: column;
    padding: 0; 
    }

    .react-datepicker__header{
        height: 60px;
    }

    .react-datepicker__header--time{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-datepicker__day--selected, .react-datepicker__day--selected:hover, .react-datepicker__day--keyboard-selected, .react-datepicker__header, .react-datepicker__current-month, .react-datepicker__day-name, .react-datepicker-time__header{
        background-color: var(--color-orange-400);
        color: var(--color-white);
    }

    .react-datepicker__day:hover, .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{
        background-color: var(--color-orange-200);
    }
    
    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected, .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
        background-color: var(--color-orange-400);
    }

`