interface Button2Props {
  text: string;
  onClick: () => void;
  color?: string;
}

export const Button2 = ({ text, onClick, color }: Button2Props) => {
  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};
