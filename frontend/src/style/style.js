//estilos
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const Contenedor = styled.div`
  width: 95%;
  height: 95vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;
export const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  padding: 15px;
  box-shadow: 2px 2px 5px #ccc;
  background-color: #f5f5f5;
  min-height: 60%;
  height: 87%;
  border-radius: 25px;
  display: grid;

  grid-template-columns: 1fr 1.5fr 10px;
  margin-top: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 0fr 0fr;
    height: 90%;
  }
`;
export const FormLogin = styled.form`
  width: 50%;
  margin: 0 auto;
  padding: 15px;
  box-shadow: 2px 2px 5px #ccc;
  background-color: #f5f5f5;
  min-height: 60%;
  height: 60%;
  border-radius: 25px;
  display: grid;

  grid-template-columns: 1fr 1.5fr 10px;
  margin-top: 10%;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 0fr 0fr;
    height: 65%;
  }
`;
export const Titulo = styled.h1`
  font-size: 35px;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 30px;
  grid-column: 1/ 4;
  margin-bottom: 15px;
  text-shadow: 1px 1px 3px black;
  letter-spacing: 3px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;
export const Input = styled.input`
  margin: 17px;
  grid-column: 2/4;
  padding: 5px;
  color: gray;
  transition: all 500ms;
  border: none;
  border: 0.2px solid #ccc;
  @media (max-width: 800px) {
    grid-column: 1/4;
    font-size: 13px;
    color: black;
  }

  &:focus {
    color: black;
    border: 1px solid #140361;
  }
`;

export const Label = styled.label`
  margin: 20px;
  text-align: left;
  grid-column: 1/2;
  font-size: 20px;
  @media (max-width: 800px) {
    grid-column: 1/4;
    margin: 5px;
    font-size: 13px;
    text-align: center;
  }
`;

export const Boton = styled.button`
  margin: 30px auto;
  margin-bottom: 10px;
  padding: 10px;
  width: 300px;
  color: white;
  grid-column: 1 /4;
  background-color: #47148b;
  border: none;
  transition: all 500ms;
  &:hover {
    background-color: #140361;
  }

  @media (max-width: 800px) {
    margin: 10px auto;
    padding: 5px;
    width: 50%;
  }
`;

export const A = styled(Link)`
  text-decoration: none;
  color: gray;
  margin: 20px auto;
  transition: all 500ms;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

export const Google = styled.a`
  text-decoration: none;
  color: gray;
  margin: 20px auto;
  transition: all 500ms;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
export const Contenido = styled.section`
  grid-column: 1 / 3;
  display: flex;
  justify-content: space-between;
`;
export const Error = styled.div`
  background-color: rgb(230, 78, 78);
  color: white;
  border-radius: 25px;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  width: 40%;
  margin: 0 auto;
  position: fixed;

  margin-top: 20px;
`;
