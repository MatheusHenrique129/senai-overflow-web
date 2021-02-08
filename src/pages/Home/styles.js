import styled from "styled-components";
import { GoSignOut } from "react-icons/go";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--dark);
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary);
  box-shadow: 0px 1px 5px var(--darkGray);
  border-bottom: 1px solid var(--darkGray);
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 20px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 40px;
  border-radius: 50%;
  border: 2px solid var(--dark);
  box-shadow: 0px 0px 5px var(--dark);

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px var(--dark);
  }
`;

export const IconSignOut = styled(GoSignOut)`
  font-size: 30px;
  cursor: pointer;
  transition: 0.2s;
  margin-right: 10px;

  :hover {
    color: var(--dark);
  }
`;

export const Content = styled.div`
  width: 1280px;
  display: grid;
  padding-top: 60px;
  grid-template-columns: 20% 60% 20%;
`;

export const ProfileContainer = styled.div`
  gap: 20px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;

  section {
    gap: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 35%;
    border-radius: 50%;
  }
`;

export const FeedContainer = styled.div`
  gap: 10px;
  display: flex;
  overflow-y: auto;
  padding: 10px 0px;
  align-items: center;
  flex-direction: column;
`;

export const ActionsContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const QuestionCard = styled.article`
  width: 80%;
  padding: 10px;
  border-radius: 4px;
  background-color: var(--darkGray);

  > header {
    gap: 10px;
    display: flex;
    align-items: center;

    > img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }
  }

  > section {
    gap: 10px;
    display: flex;
    margin-top: 10px;
    flex-direction: column;

    > strong {
      font-size: 18px;
    }

    > p {
      font-size: 15px;
      padding: 10px 5px;
      border-left: 2px solid var(--primary);
    }

    > img {
      max-width: 100%;
      align-self: center;
    }
  }
  > footer {
    margin-top: 10px;

    > h1 {
      font-size: 18px;
      cursor: pointer;
      transition: 0.2s;
      font-weight: bold;

      :hover {
        color: var(--primary);
      }
    }
    > section {
      padding: 5px;
      margin-top: 10px;
      border-radius: 4px;
      background-color: var(--dark);

      > header {
        gap: 10px;
        display: flex;
        align-items: center;

        > img {
          width: 30px;
          height: 30px;
          border-radius: 15px;
        }
      }

      > p {
        width: 100%;
        margin-top: 5px;
        padding: 10px 5px;
        border-left: 2px solid var(--primary);
      }
    }

    > form {
      gap: 5px;
      width: 100%;
      display: flex;
      margin-top: 5px;

      > textarea {
        flex: 1;
      }
    }
  }
`;

export const FormNewQuestion = styled.form`
  gap: 10px;
  min-width: 300px;
  width: 350px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  > img {
    display: none;
    max-width: 75%;
    align-self: center;
  }
`;
