import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  padding: 2px 8px;
  width: fit-content;
  border-radius: 4px;
  align-items: center;
  margin: 0px 10px 10px 0px;
  background-color: var(--darkGray);




  > span {
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
    justify-content: space-between;
    cursor: pointer;

    :hover {
      color: var(--primary);
    }
  }
`;
