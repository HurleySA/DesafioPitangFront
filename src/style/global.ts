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

    table {
        
        thead {
            background-color: #CA4F2F;

            tr{
                th{
                    border-bottom: 1px solid #CA4F2F;
                    color: #fafafa !important;
                }
            }
        }
        tbody {
            tr{
                td{
                    border-bottom: 1px solid #CA4F2F;
                    font-size: 1rem;
                    font-weight: 500;
                }
            }
        }
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
        background-color: #CA4F2F;
        color: #fafafa;
    }

    .react-datepicker__day:hover, .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{
        background-color: #f5967d;
    }
    
    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected, .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
        background-color: #CA4F2F;
    }

`