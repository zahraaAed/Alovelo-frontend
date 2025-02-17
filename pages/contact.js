// pages/contact.js
import React from "react";
import styles from "../styles/Contact.module.css";
import Header from "@/Component/Header.jsx";
import Footer from "@/Component/Footer.jsx";

export default function Contact() {
  return (
    <>
       <Header />
    <div className={styles.contactSection}>
      <h1 className={styles.heading}>HAVE AN EVENT COMING UP?</h1>
      <p className={styles.subtitle}>
        Contact us today to book your tricycle bar experience.
      </p>

      <form className={styles.contactForm}>
        {/* Name + Email side by side */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
            />
          </div>
        </div>

        {/* Subject */}
        <div className={styles.formGroupMessage}>
          <input
            type="text"
            placeholder="Message subject"
            className={styles.subjectInput}
          />
        </div>

        {/* Message */}
        <div className={styles.formGroup}>
          <textarea
            placeholder="Message"
            className={styles.textarea}
          />
        </div>

        <hr className={styles.divider} />

        <button type="submit" className={styles.submitBtn}>
          SEND
        </button>
      </form>
    </div>
      <Footer/>
    </>
  );
}
