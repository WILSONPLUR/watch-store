// import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { About } from "./sections/About/About";
import { Catalog } from "./sections/Catalog/Catalog";
import { Contacts } from "./sections/Contacts/Contacts";
import { Hero } from "./sections/Hero/Hero";
import { TopBrands } from "./sections/TopBrands/TopBrands";
import { Watch } from "./sections/Watch/Watch";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Watch />
      <TopBrands />
      <Catalog />
      <Banner />
      <Contacts />
    </>
  );
}
