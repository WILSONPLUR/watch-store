import React from "react";
import styles from "./ChatButton.module.css";

interface IChatButton {
  onClick: () => void;
}

export const ChatButton = ({ onClick }: IChatButton) => {
  return (
    <div className={styles.chatWrapper}>
      <button className={styles.chatButton} onClick={onClick}>
        АІ чат
      </button>
    </div>
  );
};
