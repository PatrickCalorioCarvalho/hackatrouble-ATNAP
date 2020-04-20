import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from "react-router-bootstrap";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

const App = () => 
    <React.Fragment>
        <Routes />
        <GlobalStyle />
    </React.Fragment>;
export default App;