import React, { Component } from "react";
import { NavLink } from "react-router-dom";


import { Form, Container } from "./styles";

import api from '../../services/api';

import { logout } from "../../services/auth";

class Advertiser extends Component {
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
        await api.post("/advertiser", { taxId, fullName,phoneNumber,companyName,email });
        this.props.history.push("/Anunciante");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar Anunciante." });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleAdd}>
          <div id="menu">
            <NavLink  to="/usuario">Usuario</NavLink>
            <div class="linha-vertical"></div>
            <NavLink activeStyle={{ color: 'black' }} to="/Anunciante">Anunciante</NavLink>
            <div class="linha-vertical"></div>
            <NavLink to="/Anunciante">Anunciante</NavLink>
            <div class="linha-vertical"></div>
            <button type="button" onClick={logout}>Logout</button>
          </div>
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
    );
  }
}

export default Advertiser;