import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    a{ 
        text-decoration: none;
    color:inherit;
}
        
    ul{list-style:none;}
    li{list-style:none;}
    
    button{ border:none;
        background: none;
        cursor: pointer;
    }
    input{outline:none;}
        
`;

export default GlobalStyle;
