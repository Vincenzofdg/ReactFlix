import styled from "styled-components";

const css = styled.div`
  width: 100%;
  height: 60%;
  padding: 40px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;

  .info {
    background: red;
    width: 30%;
    height: 25%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itens: center;
    text-align: center;

    .watch-btn {
      background-color: white;
      border: none;
      font-weight: bolder;
      border-radius: 10px;

      width: 160px;
      height: 70px;

      text-decoration: none;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
  }
`;

export default css;
