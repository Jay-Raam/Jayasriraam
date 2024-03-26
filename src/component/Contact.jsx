import React from "react";
import styles from "./Contact.module.css";
import myImage_1 from "../image/image 22.png";
import myImage_2 from "../image/image 24.png";
import myImage_3 from "../image/image 25.png";
import myImage_4 from "../image/image 26.png";
import myImage_5 from "../image/image 27.png";

function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.two}>
            <div className={styles.logo_text}>
              <div className={styles.text}>
                <h1 className={styles.name}>Jayasriraam</h1>
                <h4>Where Innovation Meets Today ♜</h4>
              </div>
              <div className={styles.link}>
                <a
                  href="https://www.instagram.com/_ivanjay_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={myImage_1} alt="instagram" />
                </a>
                <a
                  href="https://twitter.com/ivan_jayram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={myImage_2} alt="x" />
                </a>
                <a
                  href="https://github.com/Jay-Raam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={myImage_3} alt="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jayasriraam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={myImage_4} alt="linkedin" />
                </a>
                <a
                  href="https://jayasriraam.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={myImage_5} alt="blogger" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.menu}>
            <ul className={styles.five}>
              <li>Focus</li>
              <li>Goal</li>
              <li>Success</li>
              <li>Do all Time</li>
            </ul>
          </div>
          <div className={styles.three}>
            <div className={styles.contact1}>
              <h1>Get in Touch</h1>
              <div className={styles.link_text}>
                <a
                  href="https://www.instagram.com/_ivanjay_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  _ivanjay_
                </a>
                <a href="mailto:Jayasriraam.job@gmail.com">
                  Jayasriraam.job@gmail.com
                </a>
                <a href="tel:+919790161669">+91 9790161669</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <p>2023 © Copyright Received By Jayasriraam</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
