import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #eee;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.navBar ul{
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  width: 100%;
  background-color: #333;
  border: 5px solid #333333;
  
}
.navBar ul a{
  text-decoration: none;
  color: #999;
  display: block;
  padding: 15px;
  margin: 0 5px;
  
}
.navBar ul .active, .navBar ul a:hover{
  background: #FFF;
  color: #222;
}
`;

export default GlobalStyle ;