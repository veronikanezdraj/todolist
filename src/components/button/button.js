export const Button = ({ children, onClick, onChange }) => {
  return (
    <button onClick={onClick} onChange={onChange}>
      {children}
    </button>
  );
};
