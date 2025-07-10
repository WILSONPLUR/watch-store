"use client";
import React, { createContext, useState, ReactNode } from "react";
import { IMainContext, Message } from "../interfaces";

export const MainContext = createContext<IMainContext>({
  menuOpened: false,
  setMenuOpened: () => {},
  setMessages: () => {},
  setMessage: () => {},
  message: {
    content: "",
    by: "me",
    id: 1,
  },
  messages: [
    {
      content:
        "Вітаю! 👋 Я допоможу вам обрати ідеальний годинник.Скажіть, будь ласка, для кого ви шукаєте годинник — для себе чи на подарунок?",
      by: "ai",
      id: 1,
    },
    {
      content: "Для себе.",
      by: "me",
      id: 2,
    },
    {
      content:
        "Чудово! 😊А ви шукаєте годинник більше для повсякденного носіння, офіційних подій чи спорту?",
      by: "ai",
      id: 3,
    },
    {
      content: "Для повсякденного, але щоб виглядав стильно.",
      by: "me",
      id: 4,
    },
    {
      content:
        "Розумію вас. Тоді рекомендую звернути увагу на класичні або мінімалістичні моделі.Підкажіть ще, вам важливо, щоб годинник був механічний чи на батарейці (кварцовий)?",
      by: "ai",
      id: 5,
    },
    {
      content: "Напевно, на батарейці, щоб не заводити.",
      by: "me",
      id: 6,
    },
    {
      content:
        "Тоді кварцовий — чудовий вибір: точний, не потребує щоденного обслуговування. Ще питання: ви надаєте перевагу шкіряним ремінцям, металевим браслетам чи можливо щось нестандартне?",
      by: "ai",
      id: 7,
    },
  ],
});

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      content:
        "Вітаю! 👋 Я допоможу вам обрати ідеальний годинник.Скажіть, будь ласка, для кого ви шукаєте годинник — для себе чи на подарунок?",
      by: "ai",
      id: 1,
    },
    {
      content: "Для себе.",
      by: "me",
      id: 2,
    },
    {
      content:
        "Чудово! 😊А ви шукаєте годинник більше для повсякденного носіння, офіційних подій чи спорту?",
      by: "ai",
      id: 3,
    },
    {
      content: "Для повсякденного, але щоб виглядав стильно.",
      by: "me",
      id: 4,
    },
    {
      content:
        "Розумію вас. Тоді рекомендую звернути увагу на класичні або мінімалістичні моделі.Підкажіть ще, вам важливо, щоб годинник був механічний чи на батарейці (кварцовий)?",
      by: "ai",
      id: 5,
    },
    {
      content: "Напевно, на батарейці, щоб не заводити.",
      by: "me",
      id: 6,
    },
    {
      content:
        "Тоді кварцовий — чудовий вибір: точний, не потребує щоденного обслуговування. Ще питання: ви надаєте перевагу шкіряним ремінцям, металевим браслетам чи можливо щось нестандартне?",
      by: "ai",
      id: 7,
    },
  ]);
  const [message, setMessage] = useState<Message>({
    content: "",
    by: "me",
    id: messages.length + 1,
  });
  const values = {
    menuOpened,
    setMenuOpened,
    messages,
    setMessages,
    message,
    setMessage,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
