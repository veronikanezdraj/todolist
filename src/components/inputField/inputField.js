import { Button } from "../button/button";
import "./inputField.css";
import { useEffect, useRef } from "react";
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
    <label id="newtask">
      {selectedToEditItem ? (
        <input
          ref={inputRef}
          className="input"
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
        <Button id="push" onClick={handleEdit}>
          edit to do
        </Button>
      ) : (
        <Button id="push" onClick={handleSubmit}>
          add to do
        </Button>
      )}
    </label>
  );
};

export default InputField;
