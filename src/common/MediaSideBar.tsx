import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

const MediaSideBar = () => {
  return (
    <Continer>
      <a className="facebook" href="https:/facebook.com/">
        <FaFacebookSquare />
      </a>
      <a className="instagram" href="https:/instagram.com/">
        <BsInstagram />
      </a>
      <a className="whatsapp" href="">
        <BsWhatsapp />
      </a>
    </Continer>
  );
};

export default MediaSideBar;

const Continer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 2rem;
  height: 8rem;
  margin-left: 1rem;
  border-radius: 1rem;
  cursor: pointer;

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
