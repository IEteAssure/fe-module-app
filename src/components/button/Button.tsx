import type { ButtonHTMLAttributes, JSX } from "react";
import "./Button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};
