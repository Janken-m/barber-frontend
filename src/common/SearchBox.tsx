import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ placeholder, onChange, value }: Props) => {
  return (
    <div>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default SearchBox;

const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  font-weight: 500;

  :focus {
    box-shadow: 2px 2px 2px var(--button);
    border-radius: 2rem;
  }
`;
