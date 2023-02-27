import styled from "styled-components";

const css = styled.div`
  width: 394px;
  height: 222px;
  margin: 1rem;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);

  .not-selected {
    .poster {
      border-radius: 15px;
      width: 100%;
      height: 100%;
    }
  }

  .selected {
    // background: #1d1e2c;
    height: 100%;

    border-radius: 5px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);

    // width: 394px;
    // height: 222px;

    .poster {
      border-radius: 5px 5px 0px 0px;
      width: 100%;
      height: 60%;
    }

    .info {
      background: red;
      height: 40%;
    }
  }

  :hover {
    transform: scale(1.4, 2);
    transition: 800ms ease;
    cursor: pointer;
  }
`;

export default css;
