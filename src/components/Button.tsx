import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
}

export const Button = ({ text, onClick, color }: ButtonProps) => {
  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};
