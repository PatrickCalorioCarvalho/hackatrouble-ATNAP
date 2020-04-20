import React, { Component} from "react";
import { NavLink } from "react-router-dom";
import {Container } from "./styles";

import api from '../../services/api';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  
  componentDidMount() {
    api.get(`/advertisement?taxId=06.990.590/0001-23`)
      .then(res => {
        const posts = res.data.sucesso.map(obj => ({description: obj.description,phoneNumber: obj.phoneNumber,title: obj.title,whatsAppApi:obj.whatsAppApi}));
        this.setState({ posts });
        console.log(this.state)
      });
  }

  render() {
    return (
      <Container>

        <nav className="navBar">
            <ul>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/usuario">Usuários</NavLink></li>
                <li><NavLink to="/anunciante/">Anunciante</NavLink></li>
                <li><NavLink to="/anuncios/">Anuncios</NavLink></li>
                <li><NavLink to="/login/">Login</NavLink></li>
                <li><NavLink to="/logout/">Logout</NavLink></li>
            </ul>
        </nav>

      <div id="app">
        <main>
          <ul>
              { this.state.posts.map(post =>
                  <li className="dash-item">
                  <header>
                    <img src="https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png" alt="Teste" />
                      <div className="user-info">
                        <strong>{post.title}</strong>  
                        <span>{post.phoneNumber}</span>
                      </div>
                    </header>
                    <p>{post.description}</p>
                    <a href={post.whatsAppApi}>Fale Conoscoo pelo Whatsapp</a>
                </li>
              )}
          </ul>
        </main>
    </div>
    </Container>
    );
  }
}

export default Dashboard;