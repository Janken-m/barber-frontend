import { useCallback, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";

const Bookning = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Continer>
      <Right></Right>
      <Left>
        <h4>Online Bookning</h4>
        <DatePicker
          // timeInputLabel="Time:"
          // showTimeInput
          isClearable
          selected={startDate}
          timeFormat="p"
          locale="pt-GMT"
          showTimeSelect
          timeIntervals={15}
          dateFormat="Pp"
          placeholderText="Välj tid för Klippning..."
          onChange={(date: Date) => setStartDate(date)}
          className="calendar"
        ></DatePicker>
      </Left>
      <Mail>
        <form>
          <h3>Kontakta oss via mejl</h3>
          <input type="text" placeholder="name..." />
          <input type="text" placeholder="email..." />
          <textarea placeholder="message..." />
        </form>
      </Mail>
      <Map>
        <p>
          <BsFillTelephoneFill style={{ marginRight: "1rem" }} />
          +46 7902 345 940
        </p>
      </Map>
    </Continer>
  );
};

export default Bookning;

const Continer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 50%);
  grid-template-areas:
    "left right"
    "mail map";
`;

const Left = styled.div`
  border: 2px solid red;
  grid-area: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-self: center;

  .calendar {
    padding: 1rem;
    border-radius: 1rem;
    width: 20rem;
  }
`;
const Right = styled.div`
  border: 2px solid blue;
  grid-area: right;
  display: flex;
`;
const Mail = styled.div`
  border: 2px solid yellow;
  grid-area: mail;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    input {
      border: none;
      outline: none;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      width: 20rem;
      margin: 0.5rem;
    }

    textarea {
      border: none;
      outline: none;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      width: 20rem;
      height: 15rem;
      margin: 0.5rem;
    }
  }
`;
const Map = styled.div`
  border: 2px solid pink;
  grid-area: map;
  display: flex;
`;
