interface Message {
  content: string;
  by: "me" | "ai";
  id: number;
}

interface IMainContext {
  menuOpened: boolean;
  setMenuOpened: (opened: boolean) => void;
  setMessages: (messages: Message[]) => void;
  setMessage: (message: Message) => void;
  message: Message;
  messages: Array<Message>;
}

export type { Message, IMainContext };
