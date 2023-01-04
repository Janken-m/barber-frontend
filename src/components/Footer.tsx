import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdRoom } from "react-icons/md";
import styled from "styled-components";
import { mobile } from "../responsive";
const mastercard: string =
  require("../assets/svg/payment/mastercard-1.svg").default;
const visa: string = require("../assets/svg/payment/visa.svg").default;
const stripe: string = require("../assets/svg/payment/stripe.svg").default;
const paypal: string = require("../assets/svg/payment/paypal.svg").default;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOGO.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Cart</ListItem>
          <ListItem>Man Products</ListItem>
          <ListItem>Woman Products</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MdRoom style={{ marginRight: "10px" }} /> Helsingborg , Sweden.
        </ContactItem>
        <ContactItem>
          <AiOutlinePhone style={{ marginRight: "10px" }} /> +46 709 44 0565
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{ marginRight: "10px" }} /> Janken@contact.dev
        </ContactItem>
        <div>
          <img src={mastercard} height="80px" width="60px" alt="" />
          <img src={visa} height="80px" width="60px" alt="" />
          <img src={paypal} height="80px" width="60px" alt="" />
          <img src={stripe} height="80px" width="60px" alt="" />
        </div>
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  font-weight: bold;
  color: var(--Scroll-color);
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
