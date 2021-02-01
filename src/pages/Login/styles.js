import styled, { keyframes } from "styled-components";

import bgImg from "../../assets/bg.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    top: 0;
    left: 0;
    z-index: -1;
    content: "";
    width: 100%;
    height: 100%;
    filter: blur(4px);
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${bgImg});
    background-position: center top;
  }
`;

const loginAnimation = keyframes`
  0%{
    opacity: 0;
    top: -250px;
    transform: scale(0.01) rotate(90deg);
  }
  100%{
    top: 0px;
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

export const FormLogin = styled.form`
  width: 30%;
  display: flex;
  min-width: 300px;
  max-width: 500px;
  overflow: hidden;
  text-align: center;
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
  background-color: #282a36cc;
  box-shadow: 0px 0px 10px black;
  animation: ${loginAnimation} 0.5s;
`;

export const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: var(--dark);
  box-shadow: 0px 2px 4px black;
  border-radius: 4px 4px 0px 0px;

  > h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
  }

  > h2 {
    font-size: 18px;
    text-align: center;
  }
`;

export const Body = styled.section`
  gap: 10px;
  width: 100%;
  padding: 30px;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
`;
