import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  position: relative;

  > input {
    border: 0;
    padding-left: 10px;
    border-radius: 3px;
    font-family: sans-serif;
  }

  > label {
    top: 0px;
    left: 10px;
    cursor: text;
    display: flex;
    position: absolute;
    align-items: center;
    pointer-events: none;
    color: var(--darkGray);
    transition: 0.2s ease-in-out;
  }

  > input,
  > label {
    width: 100%;
    height: 30px;
    font-size: 16px;
  }

  > input:focus {
    border-bottom: 2px solid var(--primary);
  }

  > input:not(:placeholder-shown) + label,
  > input:focus + label {
    font-size: 14px;
    color: var(--light);
    top: -25px;
    left: 0;
  }
`;
