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
import { signOut, getUser } from "../../services/security";
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

function Answer({ answer }) {
  console.log(answer);

  return (
    <section>
      <header>
        <img src={imgProfile} alt="Imagem de Perfil" />
        <strong>por {answer.Student.name}</strong>
        <p>{answer.created_at}</p>
      </header>
      <p>{answer.description}</p>
    </section>
  );
}

function Question({ question }) {
  const [answers, setAnswers] = useState(question.Answers);

  const [showAnswers, setShowAnswers] = useState(false);

  const [newAnswer, setNewAnswer] = useState("");

  const qtdAnswers = answers.length;

  const handleAddAnswer = async (e) => {
    e.preventDefault();

    if (newAnswer.length < 8) {
      return alert("A resposta deve ter no minimo 8 caracteres");
    }

    try {
      const response = await api.post(`questions/${question.id}/answers`, {
        description: newAnswer,
      });

      const student = getUser();

      const answerAdded = {
        id: response.data.id,
        description: newAnswer,
        created_at: response.data.createdAt,
        Student: {
          id: student.studentId,
          name: student.name,
        },
      };

      setAnswers([...answers, answerAdded]);

      setNewAnswer("");
    } catch (error) {
      alert(error);
    }
  };

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
        <img src={question.image} alt="" />
      </section>
      <footer>
        <h1 onClick={() => setShowAnswers(!showAnswers)}>
          {qtdAnswers === 0 ? (
            " Seja o primeiro a responder"
          ) : (
            <>
              {qtdAnswers}
              {qtdAnswers > 1 ? " Respostas" : " Resposta"}
            </>
          )}
        </h1>
        {showAnswers && (
          <>
            {answers.map((a) => (
              <Answer answer={a} />
            ))}
          </>
        )}
        <form onSubmit={handleAddAnswer}>
          <textarea
            placeholder="Escreva uma resposta..."
            onChange={(e) => setNewAnswer(e.target.value)}
            required
          >
            {newAnswer}
          </textarea>
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
