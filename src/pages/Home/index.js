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

import logo from "../../assets/logo.png";
import imgProfile from "../../assets/foto_perfil.png";

function Profile() {
  return (
    <>
      <section>
        <img src={imgProfile} />
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

function Home() {
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <IconSignOut />
      </Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          <QuestionCard>
            <header>
              <img src={imgProfile} />
              <strong>por Ciclano da Silva</strong>
              <p>em 12/12/2020 as 12:12</p>
            </header>
            <section>
              <strong>Titulo </strong>
              <p>Descrição</p>
              <img src="https://raddevon.com/wp-content/uploads/2018/10/react.jpg" />
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
                <textarea
                  placeholder="Escreva uma resposta..."
                  required
                ></textarea>
                <button>Comentar</button>
              </form>
            </footer>
          </QuestionCard>

          <QuestionCard>
            <header>
              <img src={imgProfile} />
              <strong>por Ciclano da Silva</strong>
              <p>em 12/12/2020 as 12:12</p>
            </header>
            <section>
              <strong>Titulo </strong>
              <p>Descrição</p>
              <img src="https://raddevon.com/wp-content/uploads/2018/10/react.jpg" />
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
                <textarea
                  placeholder="Escreva uma resposta..."
                  required
                ></textarea>
                <button>Comentar</button>
              </form>
            </footer>
          </QuestionCard>
        </FeedContainer>
        <ActionsContainer>
          <button>Fazer uma pergunta</button>
        </ActionsContainer>
      </Content>
    </Container>
  );
}

export default Home;
