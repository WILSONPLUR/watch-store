"use client";
import React, { useContext, useId } from "react";
import { ArrowLeft, Robot, Send } from "../../../../../../public/icons";
import styles from "./AiChat.module.css";
import { Button } from "@/app/components/Button/Button";
import Link from "next/link";
import { MainContext } from "@/app/context";
import { useRouter } from "next/navigation";
import { ChatList } from "../ChatList/ChatList";
import { useScreenWidth } from "@/app/hooks/useScreenWidth";

interface IAiChat {
  type: "general" | "chat";
}

export const AiChat = ({ type }: IAiChat) => {
  const { push } = useRouter();
  const id = useId();
  const screenWidth = useScreenWidth();
  const { message, messages, setMessage, setMessages } =
    useContext(MainContext);
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({
      content: e.target.value,
      by: "me",
      id: messages.length + 1 + Math.random() * 1000,
    });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([
      ...messages,
      message,
      {
        content:
          "Тоді кварцовий — чудовий вибір: точний, не потребує щоденного обслуговування. Ще питання: ви надаєте перевагу шкіряним ремінцям, металевим браслетам чи можливо щось нестандартне?",
        by: "ai",
        id: messages.length + 1 + Math.random() * 1000,
      },
    ]);
    setMessage({
      content: "",
      by: "me",
      id: messages.length + 1 + Math.random() * 1000,
    });
    if (type === "general") push(`/chat/${id}`);
  };

  const onClickOnInlineBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    if (!target.textContent) return;

    const aiResponse =
      "Тоді кварцовий — чудовий вибір: точний, не потребує щоденного обслуговування. Ще питання: ви надаєте перевагу шкіряним ремінцям, металевим браслетам чи можливо щось нестандартне?";

    setMessages([
      ...messages,
      {
        content: target.textContent,
        by: "me",
        id: Date.now() + Math.random(),
      },
      {
        content: aiResponse,
        by: "ai",
        id: Date.now() + Math.random() + 1,
      },
    ]);
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
          <Link
            href={type === "general" ? "/" : "/chat"}
            prefetch={false}
            className={styles.chatHeaderBack}
          >
            <img
              src={ArrowLeft.src}
              alt="back navigation"
              className={styles.chatHeaderBackIcon}
            />
          </Link>
          <img
            src={Robot.src}
            alt="ai robot"
            className={styles.chatHeaderIcon}
          />
          <h3 className={styles.chatHeaderTitle}>AI-агент</h3>
          <p className={styles.chatHeaderDescription}>
            Швидко, точно та без нав’язливих порад. Просто запитайте.
          </p>
          <div className={styles.chatContent}>
            {type === "chat" && <ChatList />}
          </div>
          <form
            className={`${
              type === "general" ? styles.chatForm : styles.chatAiForm
            }`}
            onSubmit={onSubmit}
          >
            <input
              placeholder="Введіть Ваш запит"
              value={message?.content}
              onChange={handleMessage}
              className={`${
                type === "general"
                  ? styles.chatHeaderInput
                  : styles.chatAiHeaderInput
              }`}
            />
            <Button
              type="submit"
              variant={screenWidth <= 420 && type === "chat" ? "text" : "solid"}
              classNames={
                screenWidth <= 420 && type === "chat"
                  ? styles.chatFormSendBtn
                  : styles.chatFormBtn
              }
            >
              {screenWidth <= 420 && type === "chat" ? (
                <img
                  src={Send.src}
                  alt="send message"
                  className={styles.chatFormSendIcon}
                />
              ) : (
                "Відправити"
              )}
            </Button>
          </form>
        </div>
        <div className={styles.chatFooter}>
          <h4 className={styles.chatFooterTitle}>Що я можу для Вас зробити?</h4>
          <div className={styles.chatFooterButtons}>
            <Button
              variant="outline"
              classNames={styles.chatFooterBtn}
              onClick={onClickOnInlineBtn}
            >
              Підібрати годинник
            </Button>
            <Button
              variant="outline"
              classNames={styles.chatFooterBtn}
              onClick={onClickOnInlineBtn}
            >
              Порівняти моделі
            </Button>
            <Button
              variant="outline"
              classNames={styles.chatFooterBtn}
              onClick={onClickOnInlineBtn}
            >
              Показати хіти продажу
            </Button>
            <Button
              variant="outline"
              classNames={styles.chatFooterBtn}
              onClick={onClickOnInlineBtn}
            >
              Обрати подарунок
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
