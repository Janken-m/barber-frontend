import { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsWhatsapp, BsHandbag } from "react-icons/bs";
const hairSalong: string = require("../assets/svg/hair-salon.svg").default;

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  console.log(open);
  return (
    <>
      <Continer>
        <h1
          style={{ color: "var(--button)", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          LOGO.
        </h1>

        <img src={hairSalong} width="75px" height="75px" alt="" />

        <RightHamburger>
          <AiOutlineMenu
            size={20}
            onClick={() => setOpen(!open)}
            style={{ cursor: "pointer" }}
          />
          {open && (
            <Hamburger>
              <AiOutlineClose
                size={20}
                color="black"
                onClick={() => setOpen(!open)}
                style={{ position: "absolute", right: "1rem", top: "1rem" }}
              />
              <ListItem>
                <li onClick={() => navigate("/bookning")}>Book Appointment</li>
                <li onClick={() => navigate("/products")}> Shop </li>
              </ListItem>
              <ButtonStyle>
                <button style={{ marginRight: "1rem" }}> Login </button>
                <button> Register </button>
              </ButtonStyle>
              <Media>
                <a className="facebook" href="https:/facebook.com/">
                  <FaFacebookSquare size={25} />
                </a>
                <a className="instagram" href="https:/instagram.com/">
                  <BsInstagram size={25} />
                </a>
                <a className="whatsapp" href="">
                  <BsWhatsapp size={25} />
                </a>
              </Media>
            </Hamburger>
          )}
        </RightHamburger>

        <Right>
          <li
            className="Book-Appointment"
            onClick={() => navigate("/bookning")}
          >
            Book Appointment
          </li>
          <li onClick={() => navigate("/products")}> Shop </li>
          <BsHandbag size={20} color="black" />
        </Right>
      </Continer>
    </>
  );
};

export default Navbar;

const Continer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Right = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  li {
    display: flex;
    justify-content: center;
    margin-right: 1rem;
    :hover {
      border-bottom: 2px solid var(--button);
    }
  }

  .Book-Appointment {
    background: var(--button);
    padding: 0.7rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const RightHamburger = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  position: absolute;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    135deg,
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 2rem;
  padding: 2rem;
  right: 0;
  top: 0;
  width: 200px;
  z-index: 1;
  cursor: pointer;
`;

const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-top: 5rem;
  li {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid gray;

    :hover {
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      background-color: var(--button);
      border-radius: 1rem;
    }
    :active {
      transform: scale(1.2);
    }
  }
`;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  button {
    border: none;
    background: var(--button);
    padding: 0.4rem;
    font-weight: 600;
    border-radius: 0.4rem;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
    }
    :active {
      transform: scale(1);
    }
  }
`;

const Media = styled.div`
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  .facebook {
    color: #4968ad;
    :hover {
      transform: scale(1.3);
    }
    :active {
      transform: scale(1);
    }
  }

  .instagram {
    margin: 1rem 0 1rem 0;
    color: #000000;
    :hover {
      transform: scale(1.3);
    }
    :active {
      transform: scale(1);
    }
  }

  .whatsapp {
    color: green;
    :hover {
      transform: scale(1.3);
    }
    :active {
      transform: scale(1);
    }
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
