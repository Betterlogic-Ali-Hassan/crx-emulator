import { cn } from "@/lib/utils";
import React from "react";
import styles from "./button.module.css";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const Button = ({ children, className }: Props) => {
  return (
    <button
      className={cn(
        "bg-black text-white hover:bg-hover !flex items-center gap-2 max-h-[62px] min-h-[62px]",
        styles["btn"],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
