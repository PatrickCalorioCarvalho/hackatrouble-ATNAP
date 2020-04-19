import React, { Component} from "react";

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
        const posts = res.data.sucesso.map(obj => ({companyName: obj.companyName,phoneNumber: obj.phoneNumber,title: obj.title}));
        this.setState({ posts });
        console.log(this.state)
      });
  }

  render() {
    return (
      <Container>
       <div id="search">
          <input
            type="text"
            placeholder="Pesquisar por nome ou categoria"
          />
          <button>Buscar</button>
        </div>

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
                    <p>{post.companyName}</p>
                    <a href={`https://github.com/vsgobbi/pyAdvertiser`}>Veja mais sobre a empresa</a>
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