import styled from "styled-components";

const css = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel-auto {
    display: flex;
    flex-direction: row;
    height: 600px;
    width: 1350px;
    overflow: hidden;
    margin-bottom: 5px;

    .banners {
      display: flex;
    }
  }

  #title {
    width: 85%;
    height: 4%;
    color: white;
    font-weight: 700;
    font-size: 22px;
  }

  .carousel-manual {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;

    width: 100%;
    height: 240px;
    overflow: hidden;

    .covers {
      display: flex;
      z-index: 0;

      .arrow {
        background-color: rgb(0, 0, 0, 0);
        filter: invert(60%);
        width: 100px;
        height: 220px;
        position: absolute;
        z-index: 1;

        :hover {
          transform: scale(1.02);
        }
      }

      .left {
        left: 0%;
        display flex;
        align-items: center;
        justify-content: center;
        img {
          width: 65px;
        }
      }
      .right {
        right: 0%;
        display flex;
        align-items: center;
        justify-content: center;
        img {
          width: 65px;
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export default css;
