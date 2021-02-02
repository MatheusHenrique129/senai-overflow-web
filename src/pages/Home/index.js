import {
  Container,
  Header,
  Content,
  ProfileContainer,
  FeedContainer,
  ActionsContainer,
  QuestionCard,
  Logo,
  IconSignOut,
} from "./styles";

import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { api } from "../../services/api";
import imgProfile from "../../assets/foto_perfil.png";
import { signOut } from "../../services/security";
import { useHistory } from "react-router-dom";

function Profile() {
  return (
    <>
      <section>
        <img src={imgProfile} alt="Imagem de Perfil" />
        <a href="#">Editar Foto</a>
      </section>
      <section>
        <strong>NOME:</strong>
        <p>Fulano de tal</p>
      </section>
      <section>
        <strong>RA:</strong>
        <p>1234567</p>
      </section>
      <section>
        <strong>E-MAIL:</strong>
        <p>fulano@gmail.com</p>
      </section>
    </>
  );
}

function Question({ question }) {
  return (
    <QuestionCard>
      <header>
        <img src={imgProfile} alt="Imagem de Perfil" />
  <strong>por {question.Student.name}</strong>
        <p>em 12/12/2020 as 12:12</p>
      </header>
      <section>
        <strong>{question.title} </strong>
        <p>{question.description}</p>
        <img src={question.image} />
      </section>
      <footer>
        <h1>03 Respostas</h1>
        <section>
          <header>
            <img src={imgProfile} />
            <strong>por Ciclano</strong>
            <p>12/12/2077 as 12:12</p>
          </header>
          <p>Resposta para a pergunta</p>
        </section>
        <form>
          <textarea placeholder="Escreva uma resposta..." required></textarea>
          <button>Comentar</button>
        </form>
      </footer>
    </QuestionCard>
  );
}

function Home() {
  const history = useHistory();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const response = await api.get("/feed");

      setQuestions(response.data);
    };

    loadQuestions();
  }, []);

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <IconSignOut onClick={handleSignOut} />
      </Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          {questions.map((q) => (
            <Question question={q} />
          ))}
        </FeedContainer>
        <ActionsContainer>
          <button>Faça uma pergunta</button>
        </ActionsContainer>
      </Content>
    </Container>
  );
}

export default Home;


//commit -m "Implementação da segurança"