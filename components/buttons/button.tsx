import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  toggleModal: () => void;
}

const Button: React.FC<ButtonProps> = ({ toggleModal }) => {
  return (
    <div className={styles.container}>
      <button className={styles.click} onClick={toggleModal}>
        <p>MINT</p>
      </button>
    </div>
  );
};

export default Button;
