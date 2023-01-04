import styled from "styled-components";
import Card from "../common/Card";
const hairShort: string = require("../assets/svg/shot-hair.svg").default;
const womenHair: string = require("../assets/svg/woman-hair.svg").default;
const mustache: string = require("../assets/svg/mustache.svg").default;
const razor: string = require("../assets/svg/razor.svg").default;

const Hero = () => {
  return (
    <Continer>
      <TopText>
        <OurServiceText> OUR SERVICES </OurServiceText>
        <h1>
          Our Barber <SpanService> Service </SpanService>
        </h1>
      </TopText>
      <CardStyle>
        <ElementCard>
          <Card url={hairShort} />
          <h3> Mens's Haircut </h3>
          <p>
            {" "}
            Full style and cut to suit your <br /> face shape.professionally
            styled.{" "}
          </p>
        </ElementCard>
        <ElementCard>
          <Card url={womenHair} />
          <h3> Women's Haircut </h3>
          <p>
            Full style and cut to suit your <br /> face shape.professionally
            styled.{" "}
          </p>
        </ElementCard>
        <ElementCard>
          <Card url={razor} />
          <h3> Beard Trim </h3>
          <p>
            Keep your beard in great shape <br /> with extra attention.
          </p>
        </ElementCard>
        <ElementCard>
          <Card url={mustache} />
          <h3> Mustache care </h3>
          <p>
            Full style and cut to suit your <br /> face shape.professionally
            styled.{" "}
          </p>
        </ElementCard>
      </CardStyle>
    </Continer>
  );
};

export default Hero;

const Continer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3rem;
  }
`;

const OurServiceText = styled.p`
  color: var(--Scroll-color);
`;

const SpanService = styled.span`
  color: var(--button);
`;

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 1rem;
  margin: 1rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ElementCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  p {
    text-align-last: center;
    color: var(--Scroll-color);
    font-weight: bold;
  }

  :hover {
    background-color: #ffffff;
    border-radius: 1rem;
  }
`;
