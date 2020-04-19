import React, { Component } from "react";

import { Form, Container } from "./styles";

import api from '../../services/api';
import { login } from "../../services/auth";

class Login extends Component {
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
    const { taxId,password } = this.state;
    if (!taxId || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        console.log({ taxId,password });
        await api.post("/login", { taxId,password });
        login(taxId);
        this.props.history.push("/usuario");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Usuario ou Senha Incorredos!!!" });
      }
    }
  };

  render() {
    return (
      
      <Container>

        <Form onSubmit={this.handleAdd}>
          {this.state.error && <p>{this.state.error}</p>}

          <input
            type="text"
            placeholder="CPF"
            onChange={e => this.setState({ taxId: e.target.value })}
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

export default Login;