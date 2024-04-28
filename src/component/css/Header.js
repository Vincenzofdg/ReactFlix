import styled from "styled-components";

const css = styled.div`
  height: 5vh;
  background: black;

  .container {
    margin: 0px 40px 0px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 125px;
      height: 45px;
      cursor: pointer;
    }

    .navegation-menu {
      display: flex;
      justify-content: left;
      flex-grow: 1;
      li {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        margin-left: 22px;
        list-style: none;
        cursor: pointer;
        :hover {
          color: gray;
          transition: color 500ms linear;
        }
      }
    }

    .auxiliar-menu {
      // background: red;
      width: 200px;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .icon {
        width: 22px;
        height: 22px;
        cursor: pointer;
      }

      .avatar {
        width: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .picture {
          width: 30px;
          height: 30px;
        }

        .arrow {
          width: 9px;
          height: 5px;
        }
      }
    }
  }
`;

export default css;
