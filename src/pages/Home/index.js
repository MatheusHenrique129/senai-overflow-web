import { useHistory } from "react-router-dom";
import { format } from "date-fns";
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
  FormNewQuestion,
} from "./styles";

import Input from "../../components/Input";

import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { api } from "../../services/api";
import imgProfile from "../../assets/foto_perfil.png";
import { signOut, getUser } from "../../services/security";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import Tag from "../../components/Chips";

function Profile() {
  const student = getUser();

  return (
    <>
      <section>
        <img src={imgProfile} alt="Imagem de Perfil" />
        <a href="#">Editar Foto</a>
      </section>
      <section>
        <strong>NOME:</strong>
        <p>{student.name}</p>
      </section>
      <section>
        <strong>RA:</strong>
        <p>{student.ra}</p>
      </section>
      <section>
        <strong>E-MAIL:</strong>
        <p>{student.email}</p>
      </section>
    </>
  );
}

function Answer({ answer }) {
  const student = getUser();

  return (
    <section>
      <header>
        <img src={imgProfile} alt="Imagem de Perfil" />
        <strong>
          por{" "}
          {student.studentId === answer.Student.id
            ? " Você"
            : answer.Student.name}
        </strong>
        <p>{format(new Date(answer.created_at), "dd/MM/yyyy 'as' HH:mm")}</p>
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

  const student = getUser();

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
        <strong>
          por{" "}
          {student.studentId === question.Student.id
            ? " Você"
            : question.Student.name}
        </strong>
        <p>
          em {format(new Date(question.created_at), "dd/MM/yyyy 'as' HH:mm")}
        </p>
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
            value={newAnswer}
          ></textarea>
          <button>Comentar</button>
        </form>
      </footer>
    </QuestionCard>
  );
}

function NewQuestion() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await api.get("/categories");

        setCategories(response.data);
      } catch (error) {
        alert(error);
      }
    };
    loadCategories();
  }, []);

  return (
    <FormNewQuestion>
      <Input id="title" label="Titulo" />
      <Input id="description" label="Descrição" />
      <Input id="gist" label="Gist" />
      <Select id="Categories" label="Categorias">
        {categories.map((c) => (
        <option value={c.id}>{c.description}</option>
        ))};
      </Select>
      <div>
        <Tag info="Backend" />
        <Tag info="FrondEnd" />
      </div>
      <input type="file" />
      <button>Enviar</button>
    </FormNewQuestion>
  );
}

function Home() {
  const history = useHistory();

  const [questions, setQuestions] = useState([]);

  const [reload, setReload] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      const response = await api.get("/feed");

      setQuestions(response.data);
    };

    loadQuestions();
  }, [reload]);

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  const handleReload = () => {
    setReload(Math.random());
  };

  return (
    <>
      <Modal title="Faça uma Pergunta">
        <NewQuestion />
      </Modal>
      <Container>
        <Header>
          <Logo src={logo} onClick={handleReload} />
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
    </>
  );
}

export default Home;
