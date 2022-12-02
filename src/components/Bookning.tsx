import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import GoogleMapComponent from "../common/GoogleMapComponent";
import { useGetStylistQuery } from "../store/Api";
import { FiMail } from "react-icons/fi";
import { VscLocation } from "react-icons/vsc";

const Bookning = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [stylistId, setStylistId] = useState("");
  const { data: stylist } = useGetStylistQuery("stylist");

  const onChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    console.log("dropdown check", value);
    setStylistId(value);
  };

  return (
    <Continer>
      <Right></Right>
      <Left>
        <h4>Online Bookning</h4>
        <Dropdown>
          <select onChange={onChange}>
            <option value="" disabled={true}>
              {" "}
              Välj Frisör{" "}
            </option>
            {stylist?.map((style: any) => (
              <option key={style._id} value={style._id}>
                {" "}
                {style.name} <img src={style.image} />
              </option>
            ))}
          </select>
        </Dropdown>
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

      <Map>
        <p>
          <BsFillTelephoneFill style={{ marginRight: "1rem" }} />
          +46 7902 345 940
        </p>
        <p>
          <FiMail style={{ marginRight: "1rem" }} />
          Janken-matene@hotmail.com
        </p>
        <p>
          <VscLocation style={{ marginRight: "1rem" }} size={20} />
          Helsingborg , 25189 , Södergatan 14
        </p>
        <GoogleMapComponent />
      </Map>
      <Mail>
        <form>
          <h3>Kontakta oss via mejl</h3>
          <input type="text" placeholder="name..." />
          <input type="text" placeholder="email..." />
          <textarea placeholder="message..." />
        </form>
      </Mail>
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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Left = styled.div`
  /* border: 2px solid red; */
  grid-area: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-self: center;

  .calendar {
    padding: 1rem;
    border-radius: 1rem;
    width: 18rem;
  }
`;

const Dropdown = styled.div`
  select {
    padding: 0.7rem;
    border-radius: 1rem;
    width: 20rem;
  }

  option {
    padding: 1rem;
    border-radius: 1rem;
    width: 20rem;
    text-align: center;
  }
`;
const Right = styled.div`
  /* border: 2px solid blue; */
  grid-area: right;
  display: flex;
`;
const Mail = styled.div`
  /* border: 2px solid yellow; */
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
  /* border: 2px solid pink; */
  grid-area: map;
  display: flex;
  flex-direction: column;
`;
