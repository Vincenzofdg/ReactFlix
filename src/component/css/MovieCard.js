import styled from "styled-components";

const css = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 394px;
  height: 222px;
  margin: 1rem;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 0px 0px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .footer {
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 20%;

    p {
      font-size: 18px;
      margin-left: 25px;
    }

    .links {
      // background: red;
      width: 25%;

      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-itens: center;
      margin-right: 15px;

      img {
        width: 35px;
        color: #fff;
        filter: invert(50%);
        :hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }
  }
`;

export default css;
