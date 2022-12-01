import styled from "styled-components";
import "../assets/css/Main.css";

const Main = () => {
  return (
    <div>
      <TextPlace>
        <TextAnimation>
          <span>ÖVER 20 ÅRS</span> <span>ERFARENHET</span>
        </TextAnimation>
      </TextPlace>
      <Continer>
        <div className="wrapper">
          <h1 className="static-text">
            Vi ge dig <br /> den <br /> bästa
          </h1>
          <ul className="dynamic-txts">
            <li>
              <span> Style </span>
            </li>
            <li>
              <span> Frisyr </span>
            </li>
            <li>
              <span> Hårvård </span>
            </li>
            <li>
              <span> Klippning </span>
            </li>
          </ul>
        </div>
      </Continer>
    </div>
  );
};

export default Main;

const Continer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const TextPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextAnimation = styled.h1`
  font-weight: 700;
  text-align: center;
  font-size: 30px;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, var(--button), #000);
  letter-spacing: 8px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: space;
  background-size: 80%;
  animation: shine 4s linear infinite;
  position: relative;
  margin-right: 60px;
  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
