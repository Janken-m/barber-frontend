import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import styled from "styled-components";
import { AiFillTwitterCircle } from "react-icons/ai";

const MediaSideBar = () => {
  return (
    <Continer>
      <SocialIcon color="3B5999" title="Facebook">
        <BsFacebook />
      </SocialIcon>
      <SocialIcon color="E4405F" title="Instagram">
        <BsInstagram />
      </SocialIcon>
      <SocialIcon color="55ACEE" title="Twitter">
        <AiFillTwitterCircle />
      </SocialIcon>
      <SocialIcon color="E60023" title="Pinterest">
        <BsPinterest />
      </SocialIcon>
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
  width: 2.5rem;
  height: 9rem;
  margin-left: 1rem;
  border-radius: 1rem;
  gap: 0.3rem;

  box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
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

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
