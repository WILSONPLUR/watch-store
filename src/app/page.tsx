"use client";
import { ChatButton } from "./components/Chat/components/ChatButton/ChatButton";
import { About } from "./sections/About/About";
import { Catalog } from "./sections/Catalog/Catalog";
import { Contacts } from "./sections/Contacts/Contacts";
import { Hero } from "./sections/Hero/Hero";
import { TopBrands } from "./sections/TopBrands/TopBrands";
import { Watch } from "./sections/Watch/Watch";
import { ChatMenu } from "./components/Chat/ChatMenu";
import { MainContext } from "./context";
import { useContext } from "react";

export default function Home() {
  const { menuOpened, setMenuOpened } = useContext(MainContext);
  const handleOpening = () => {
    setMenuOpened(true);
  };
  return (
    <>
      <Hero />
      <About />
      <Watch />
      <TopBrands />
      <Catalog />
      <Contacts />
      {menuOpened ? null : <ChatButton onClick={handleOpening} />}
      {menuOpened && <ChatMenu />}
    </>
  );
}
