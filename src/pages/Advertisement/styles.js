import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 500px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  #menu {
    margin: 0 auto;
    padding: 20px 30px;
    width: 100%;
    display: flex;
  }

  .linha-vertical {
    height: 25px;/*Altura da linha*/
    border-left: 1px solid;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
    margin: 0 15px;
  }

  #menu button {
    
    width: 30%;
    height: 20px;
    font-size: 14px;
    background: #EA4335;
    color:#fff;
    border: 0;
    border-bottom: 1px solid #eee;
    margin-bottom: 50px;
  }

  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #0f9d58;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;