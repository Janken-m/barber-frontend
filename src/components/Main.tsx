import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../assets/css/Main.css";
import Hero from "./Hero";
import MiddleBar from "./MiddleBar";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <TextPlace>
        <TextAnimation>
          <span>MORE THAN 20 YEARS</span> <span>EXPERIENCE</span>
        </TextAnimation>
      </TextPlace>
      <Wrapper>
        <Continer>
          <TextLeft>
            We are looking <br /> to make you <br />{" "}
            <SpanService>handsome</SpanService>
          </TextLeft>
          <p>
            You will leave lookin' Sharp, relaxed and ready to <br />
            take on the world, with that swagger in your stride.
          </p>
          <Button onClick={() => navigate("/bookning")}> Booka Online </Button>
          <img
            src={require("../assets/svg/nr-1.png")}
            style={{ paddingTop: "1rem" }}
            alt=""
          />
        </Continer>
        <RightShape>
          <img width="60%" src={require("../assets/svg/barber.png")} alt="" />
        </RightShape>
      </Wrapper>
      <MiddleBar />
      <Hero />
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Continer = styled.div`
  display: flex;
  flex-direction: column;
  place-self: center;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    position: relative;
    padding: 0;
    margin: 0;
  }
`;

const SpanService = styled.span`
  color: var(--button);
`;

const TextLeft = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const TextPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
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
    align-items: center;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: var(--button);
  border: none;
  outline: none;
  padding: 1rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 1rem;

  :hover {
    background: linear-gradient(
      90deg,
      var(--button),
      var(--button),
      var(--button)
    );
    border-radius: 1rem;
  }

  :active {
    transform: scale(1.2);
  }
`;

const RightShape = styled.div`
  img {
    background-color: var(--button);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 10%;
    border-bottom-left-radius: 30%;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
