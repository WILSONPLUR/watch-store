"use client";
import { Message } from "@/app/interfaces";
import React, { useContext } from "react";
import styles from "./ChatList.module.css";
import { ChatMessage } from "../ChatMessage/ChatMessage";
import { MainContext } from "@/app/context";

export const ChatList = () => {
  const { messages } = useContext(MainContext);
  return (
    <div className={styles.chatList}>
      {messages.map((message: Message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};
