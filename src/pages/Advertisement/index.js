import React, { Component } from "react";
import { NavLink } from "react-router-dom";


import { Form, Container } from "./styles";

import api from '../../services/api';

import { logout } from "../../services/auth";

class Advertisement extends Component {
  state = {
    advertiserTaxId: "",
    category: "",
    title: "",
    description: "",
    phoneNumber: "",
    price: 0,
    error: "",
    picturesUrl:""
  };

  handleAdd = async e => {
    e.preventDefault();
    const { advertiserTaxId, title,phoneNumber,description,category,price,picturesUrl } = this.state;
    if (!advertiserTaxId || !title || !phoneNumber || !description || !category || !picturesUrl) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        console.log({ advertiserTaxId, title,phoneNumber,description,category,picturesUrl,price });
        await api.post("/advertisement", { advertiserTaxId, title,phoneNumber,description,category,picturesUrl,price });
        this.props.history.push("/usuario");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar Propaganda." });
      }
    }
  };

  render() {
    return (
      <div>
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
      <Container>
        <Form onSubmit={this.handleAdd}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Titulo"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descrição"
            onChange={e => this.setState({ description: e.target.value })}
          />

          <input
            type="text"
            placeholder="Categoria"
            onChange={e => this.setState({ category: e.target.value })}
          />

          <input
            type="text"
            placeholder="CNPJ"
            onChange={e => this.setState({ advertiserTaxId: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Telefone"
            onChange={e => this.setState({ phoneNumber: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL Imagem"
            onChange={e => this.setState({ picturesUrl: e.target.value })}
          />

           <button type="submit">Salvar</button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default Advertisement;