import React from "react";
import myImage from '../image/m11.avif'; 
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.container}>
        <div className={styles.one}>
            <div className={styles.text}>
                      <h1 className={styles.text1}>About Us</h1>
          <p className={styles.text2}>
I have a strong passion for learning and a knack for quickly adopting new technologies and knowledge. 
I believe this adaptability will help me develop both hard and soft skills crucial for success in my chosen career path.
Specifically, I am eager to gain expertise in web development and UI/UX design. I already possess skills in
JavaScript and some frameworks, which I'm continuously improving.<br></br>

<br></br>

I am enthusiastic about my career journey in web development and UI/UX Enthusiast, and I'm committed to working towards these goals.
          </p>
            </div>
            <div className={styles.image}>
             <img src={myImage} alt="the men" className="image-1" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
