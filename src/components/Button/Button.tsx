import * as SC from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return <SC.Button onClick={onClick}>{children}</SC.Button>;
};
