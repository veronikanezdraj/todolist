import "./Button.css";
// import styled from "styled-components";
// const ButtonStyled = styled.button`
//   font-size: 16px;
//   background-color: rgb(115, 185, 194);
//   border: none;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
//     rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
//     rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
//   color: #ffffff;
//   cursor: pointer;
//   outline: none;
//   width: 15%;
//   height: 56px;
//   border-radius: 8px;
//   font-family: "Poppins", sans-serif;
// `;
export const Button = ({ children, onClick, onChange }) => {
  return (
    <button onClick={onClick} onChange={onChange}>
      {children}
    </button>
  );
};
