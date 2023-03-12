import styled from "styled-components";

const css = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel-auto {
    background: red;

    display: flex;
    flex-direction: row;
    height: 70%;
    width: 1350px;
    overflow: hidden;

    .banners {
      display: flex;
      transform: translateX(0);
      transition: transform 0.5s ease-in-out;
    }
  }
`;

export default css;
