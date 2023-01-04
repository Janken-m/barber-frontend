import styled from "styled-components";

const MiddleBar = () => {
  return (
    <Continer>
      <ListBar>
        <li className="scroll-text">
          HAIRSTORY <span> theguardian </span> <span> cuttly </span>{" "}
          <span> salon </span> <span> Bloomberg</span>
        </li>
      </ListBar>
    </Continer>
  );
};

export default MiddleBar;

const Continer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #faf8f4;
`;

const ListBar = styled.div`
  list-style: none;
  display: flex;
  padding: 2rem;
  margin: 2rem;
  color: var(--Scroll-color);
  font-weight: bold;
  font-size: 2rem;
  justify-content: space-around;
  overflow: hidden;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    span {
      padding: 1rem;
    }
  }

  .scroll-text {
    /* animation properties */
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);

    -moz-animation: my-animation 15s linear infinite;
    -webkit-animation: my-animation 15s linear infinite;
    animation: my-animation 15s linear infinite;
  }

  /* for Firefox */
  @-moz-keyframes my-animation {
    from {
      -moz-transform: translateX(100%);
    }
    to {
      -moz-transform: translateX(-100%);
    }
  }

  /* for Chrome */
  @-webkit-keyframes my-animation {
    from {
      -webkit-transform: translateX(100%);
    }
    to {
      -webkit-transform: translateX(-100%);
    }
  }

  @keyframes my-animation {
    from {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    to {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;
