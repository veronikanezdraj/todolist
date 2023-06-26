import { Button } from "../button/button";
import { useEffect, useRef } from "react";
import "./Input.css";

const InputFieldApishka = ({
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
          className="input"
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
          className="input"
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

export default InputFieldApishka;
