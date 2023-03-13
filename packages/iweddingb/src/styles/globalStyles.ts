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
`;

export default GlobalStyles;
