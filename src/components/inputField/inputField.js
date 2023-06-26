import { Button } from "../button/button";
import { useEffect, useRef } from "react";
// import styled from "styled-components";

// const StyledInput = styled.input`
//   margin-left: 55px;
//   width: 65%;
//   height: 45px;
//   padding: 10px;
//   color: rgb(3, 12, 69);
//   border-radius: 5px;
//   font-family: "Poppins", sans-serif;
//   font-size: 15px;
//   border: none;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
//     rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
//   background-color: rgb(221, 249, 252);
// `;

const InputField = ({
  text,
  handleSubmit,
  handelInput,
  selectedToEditItem,
  handleEdit,
  setSelectedToEditItem,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedToEditItem]);

  return (
    <label>
      {selectedToEditItem ? (
        <input
          ref={inputRef}
          value={selectedToEditItem.text}
          onChange={(event) =>
            setSelectedToEditItem((prevState) => ({
              ...prevState,
              text: event.target.value,
            }))
          }
        />
      ) : (
        <input
          placeholder="Title..."
          value={text}
          onChange={(event) => handelInput(event.target.value)}
        />
      )}

      {selectedToEditItem ? (
        <Button onClick={handleEdit}>edit to do</Button>
      ) : (
        <Button onClick={handleSubmit}>add to do</Button>
      )}
    </label>
  );
};

export default InputField;
