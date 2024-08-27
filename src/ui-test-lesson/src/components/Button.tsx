import React from "react";

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, primary = false, onClick }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", mode].join(" ")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
