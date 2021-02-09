import { useState } from "react";
import { api } from "../../services/api";
import Input from "../../components/Input";
import { Link, useHistory } from "react-router-dom";
import { Container, FormLogin, Header, Body, Button } from "./styles";
import { signIn } from "../../services/security";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

function Login() {
  const history = useHistory();

  const [showLoading, setShowLoading] = useState(false);

  const [message, setMessage] = useState(undefined);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

      setShowLoading(true);
      history.push("/home");
    } catch (error) {
      console.error(error);
      setShowLoading(false);
      setMessage({ title: "Ops...", description: error.response.data.error });
    }
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />
      {showLoading && <Loading />}
      <Container>
        <FormLogin onSubmit={handleSubmit}>
          <Header>
            <h1>BEM VINDO AO SENAIOVERFLOW</h1>
            <h2>O SEU PORTAL DE RESPOSTAS</h2>
          </Header>
          <Body>
            <Input
              id="email"
              label="E-mail"
              type="email"
              value={login.email}
              handler={handleInput}
              required
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              value={login.password}
              handler={handleInput}
              required
            />
            <Button onClick={() => setShowLoading(true)}>Entrar</Button>
            <Link to="/register">Clique aqui para se cadastrar</Link>
          </Body>
        </FormLogin>
      </Container>
    </>
  );
}

export default Login;
