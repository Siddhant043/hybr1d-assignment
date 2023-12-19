import React, { MouseEventHandler } from "react";
import styles from "./index.module.css";

interface ButtonProps {
  text: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton = ({ text, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className={styles.main}>
      {text}
    </button>
  );
};

export default PrimaryButton;
