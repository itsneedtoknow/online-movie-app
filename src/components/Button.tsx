import { ReactNode, MouseEvent } from "react";

interface IButton {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}
export function Button({ type, className, onClick, children }: IButton) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
