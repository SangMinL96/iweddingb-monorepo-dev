import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    html{
      font-size: 10px;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    *{
      box-sizing: border-box;
    }
    button {border:0 none;background-color:transparent;cursor:pointer}
    body {
      position: relative;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
      color: #262626;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin : 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
    ul,li{
      list-style:none;
      padding-left:0px;
    }
    /* 토스트 스타일 */
    .Toastify__toast{
      width: 345px;
      padding: 16px 20px 16px 20px;
      min-height:48px;
      max-height:48px;
      margin-bottom: 20px;
    }
    .Toastify__toast-container {
      width: 345px;
      height:48px !important;
      .Toastify__toast {
        display: flex;
        align-items: center;
        border-radius: 8px;
        background-color: #262626;
        color: white;
        font-size: 1.3rem;
        .Toastify__toast-body {
          padding: 0;
    
        }
        .Toastify__close-button {
          display: none;
        }
        /* .Toastify__close-button {
          display: flex;
          align-items: center;
          width: 24px;
          height: 100%;
        } */
      }
    }
    .Toastify__toast-container--bottom-center{
      bottom: 3em;
    }
`;

export default GlobalStyles;
