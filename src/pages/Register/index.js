import Input from "../../components/Input";
import { Container, FormLogin, Header, Body, Button } from "./styles";

function Register() {
  return (
    <Container>
      <FormLogin>
        <Header>
          <h1>BEM VINDO AO SENAIOVERFLOW</h1>
          <h2>INFORME OS SEUS DADOS</h2>
        </Header>
        <Body>
          <Input id="ra" label="RA" type="text" />
          <Input id="name" label="Nome" type="text" />
          <Input id="email" label="E-mail" type="email" />
          <Input id="password" label="Senha" type="password" />
          <Input id="valid-password" label="Confirmar Senha" type="password" />
          <Button>Enviar</Button>
          <a href="#">Ou, se já tem cadastro, clique para entrar</a>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Register;
