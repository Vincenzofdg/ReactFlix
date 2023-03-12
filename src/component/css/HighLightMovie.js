import styled from "styled-components";

const css = styled.div`
  width: 1350px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .info {
    width: 30%;
    height: 25%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itens: center;
    text-align: center;

    h1 {
      font-size: 26px;
    }

    .btns {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-itens: center;

      .btn {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        border: none;
        border-radius: 7px;
        height: 45px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }

      .watch-btn {
        background-color: white;
        color: black;
        width: 130px;
        :hover {
          background-color: rgb(199, 199, 199);
        }
      }

      .info-btn {
        background-color: rgb(0, 0, 0, 0.9);
        color: white;
        width: 230px;

        :hover {
          background-color: rgb(0, 0, 0, 0.5);
        }
      }

      p {
        font-size: 18px;
        font-weight: bolder;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      #icon {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export default css;
