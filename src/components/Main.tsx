import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../assets/css/Main.css";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Image>
        <img src="https://res.cloudinary.com/dylxgsias/image/upload/c_crop,h_1396,x_-200,y_274/v1670375914/BarberShop/ground_kxjdtw.jpg" />
      </Image>
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
          <h1>
            STYL <span> FRISYR </span> <span> HÅRVÅRD </span>
          </h1>
          <Button onClick={() => navigate("/bookning")}> Booka Online </Button>
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

const Image = styled.div`
  width: 100%;

  img {
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
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
    display: none;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #acabab, var(--button), #acabab);
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
