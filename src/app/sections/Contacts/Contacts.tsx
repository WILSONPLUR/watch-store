import React from "react";
import { BgWatch } from "../../../../public/contacts";
import styles from "./Contacts.module.css";
import { Button } from "@/app/components/Button/Button";

export const Contacts = () => {
  const btnStyles = {
    width: "100%",
    padding: "15px 20px",
  };
  return (
    <section className={styles.contacts}>
      <div className={styles.contactsContent}>
        <div className={styles.contactsText}>
          <h2 className={styles.contactsTitle}>
            Залиште заявку — ми зв’яжемося з вами
          </h2>
          <p className={styles.contactsSubtitle}>
            Підкажемо, допоможемо з вибором, відповімо на всі запитання.
          </p>
        </div>
        <form className={styles.contactsForm}>
          <div className={styles.contactsTextFields}>
            <input
              type="text"
              className={styles.textField}
              placeholder="Ім'я"
              required
            />
            <input
              type="email"
              className={styles.textField}
              placeholder="Email"
              required
            />
          </div>
          <Button
            type="submit"
            variant="solid"
            bgColor="#fff"
            color="#000"
            style={btnStyles}
            classNames={styles.contactsBtn}
          >
            Відправити
          </Button>
        </form>
      </div>
      <img src={BgWatch.src} alt="watch bg" className={styles.contactsImg} />
    </section>
  );
};
