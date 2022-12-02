import { ChangeEvent, FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import GoogleMapComponent from "../common/GoogleMapComponent";
import { useGetStylistQuery, useAddBookningMutation } from "../store/Api";
import { FiMail } from "react-icons/fi";
import { VscLocation } from "react-icons/vsc";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const Bookning = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState<string>("");
  const [stylistId, setStylistId] = useState("");
  const { data: stylist } = useGetStylistQuery("stylist");
  const [AddBookning] = useAddBookningMutation();

  const onChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    console.log("dropdown check", value);
    setStylistId(value);
  };

  const dateFormat = dayjs(startDate).format("dddd, MMMM D, YYYY h:mm A");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await AddBookning({
        name: name,
        date: dateFormat,
        StylistId: stylistId,
      });

      toast.success(`Tack ${name} Tiden är bookad, vi ses snart!`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Continer>
      <Right></Right>
      <Left>
        <form onSubmit={handleSubmit}>
          <h4>Online Bookning</h4>
          <Input
            type="text"
            placeholder="Ditt namn... "
            onChange={(e) => setName(e.target.value)}
          />
          <Dropdown>
            <select onChange={onChange}>
              <option value="" disabled={true}>
                {" "}
                Välj Frisör{" "}
              </option>
              {stylist?.map((style: any) => (
                <option key={style._id} value={style._id}>
                  {" "}
                  {style.name}{" "}
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
          <Button type="submit"> Booka </Button>
        </form>
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
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--button);
    width: 330px;
    border-radius: 10px;
    padding: 40px 30px;
    box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
  }
`;

const Button = styled.button`
  border: none;
  background-color: var(--button);
  padding: 0.4rem;
  font-weight: 600;
  border-radius: 0.4rem;
  margin-top: 1rem;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }
  :active {
    transform: scale(1);
  }
`;

const Input = styled.input`
  padding: 0.7rem;
  border-radius: 1rem;
  width: 18rem;

  ::placeholder {
    text-align: center;
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
    border: 1px solid var(--button);
    width: 330px;
    border-radius: 10px;
    padding: 40px 30px;
    margin-top: 100px;
    box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);

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
