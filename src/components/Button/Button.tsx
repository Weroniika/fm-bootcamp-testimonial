import * as SC from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel?: string;
};

export const Button = ({ children, onClick, ariaLabel = "" }: ButtonProps) => {
  return (
    <SC.Button onClick={onClick} aria-label={ariaLabel}>
      {children}
    </SC.Button>
  );
};
