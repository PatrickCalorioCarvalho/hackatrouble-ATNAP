import React, { Component } from "react";
import { NavLink } from "react-router-dom";


import { Form, Container } from "./styles";

import api from '../../services/api';

import { logout } from "../../services/auth";

class Advertisement extends Component {
  state = {
    taxId: "",
    email: "",
    fullName: "",
    companyName: "",
    phoneNumber: "",
    error: ""
  };

  handleAdd = async e => {
    e.preventDefault();
    const { taxId, fullName,phoneNumber,companyName,email } = this.state;
    if (!taxId || !fullName || !phoneNumber || !companyName || !email) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        console.log({ taxId, fullName,phoneNumber,companyName,email });
        await api.post("/Advertisement", { taxId, fullName,phoneNumber,companyName,email });
        this.props.history.push("/anuncios");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar Anunciante." });
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
            placeholder="Nome Completo"
            onChange={e => this.setState({ fullName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Empresa"
            onChange={e => this.setState({ companyName: e.target.value })}
          />

          <input
            type="text"
            placeholder="CNPJ"
            onChange={e => this.setState({ taxId: e.target.value })}
          />

          <input
            type="email"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Telefone"
            onChange={e => this.setState({ phoneNumber: e.target.value })}
          />
          <button type="submit">Salvar</button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default Advertisement;