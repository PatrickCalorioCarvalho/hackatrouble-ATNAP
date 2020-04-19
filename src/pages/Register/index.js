import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Form, Container } from "./styles";

import api from '../../services/api';

import { logout } from "../../services/auth";

class Register extends Component {
  state = {
    taxId: "",
    fullName: "",
    phoneNumber: "",
    password: "",
    email:"",
    error: ""
  };

  handleAdd = async e => {
    e.preventDefault();
    const { taxId, fullName,phoneNumber,password,email } = this.state;
    if (!taxId || !fullName || !phoneNumber || !password || !email) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        console.log({ taxId, fullName,phoneNumber,password,email });
        await api.post("/register", { taxId, fullName,phoneNumber,password,email });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar Usuario." });
      }
    }
  };
  render() {
    return (
      
      <Container>

        <Form onSubmit={this.handleAdd}>
        <div id="menu">
          <NavLink activeStyle={{ color: 'black' }} to="/usuario">Usuario</NavLink>
          <div class="linha-vertical"></div>
          <NavLink to="/Anunciante">Anunciante</NavLink>
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
            placeholder="CPF"
            onChange={e => this.setState({ taxId: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Telefone"
            onChange={e => this.setState({ phoneNumber: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Salvar</button>
        </Form>
      </Container>
    );
  }
}

export default Register;